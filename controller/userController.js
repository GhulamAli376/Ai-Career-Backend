import { Roadmap } from "../schema/roadmap.js";

import fetch from "node-fetch";
export const aiRoadMap=async (req, res) => {
  try {
    const { userInput } = req.body;

    console.log("User Input:", userInput);
    const name = userInput.match(/Name:\s*([^,]+)/)?.[1]?.trim();
    const field = userInput.match(/Field:\s*([^,]+)/)?.[1]?.trim();
    const skillLevel = userInput.match(/Skill Level:\s*(.+)/)?.[1]?.trim();

    console.log({ name, field, skillLevel });

    if (!field || !skillLevel) {
      return res.status(400).json({
        error:
          "Invalid input format. Please include Name, Field, and Skill Level.",
      });
    }

    // Check if roadmap already exists
    const existing = await Roadmap.findOne({ field, skillLevel });
    if (existing) {
      console.log("✅ Returning cached roadmap from database");
      existing.hits += 1;
      existing.lastUsed = new Date();
      await existing.save();

      return res.json({
        roadmap: existing.response,
        cached: true,
        hits: existing.hits,
      });
    }

    // Otherwise, generate a new roadmap using OpenRouter
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization":
            "Bearer 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",
          "HTTP-Referer": "http://localhost:5173",
        },
        body: JSON.stringify({
          model: "mistralai/mixtral-8x7b-instruct",
          messages: [
            {
              role: "system",
              content:
                "You are an AI career mentor. Generate a step-by-step career roadmap including skills, projects, and learning timeline.",
            },
            { role: "user", content: userInput },
          ],
          max_tokens: 600,
        }),
      }
    );

    const data = await response.json();
    console.log("🔥 OpenRouter Response:", data);

    const roadmap =
      data?.choices?.[0]?.message?.content ||
      "⚠️ Unable to generate roadmap. Please try again.";

    // Save the roadmap
   await Roadmap.findOneAndUpdate(
  { prompt: userInput }, // 👈 ye line important hai
  { name, field, skillLevel, prompt: userInput, response: roadmap, lastUsed: new Date() },
  { upsert: true, new: true, setDefaultsOnInsert: true }
);


    res.json({ roadmap, cached: false });
  } catch (error) {
    console.error("❌ Error generating roadmap:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};