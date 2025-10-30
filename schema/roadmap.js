// models/Roadmap.js
import mongoose from "mongoose";

const roadmapSchema = new mongoose.Schema({
  prompt: { type: String, required: true },
  name: { type: String },
  field: { type: String },
  skillLevel: { type: String },
  response: { type: String, required: true },
  hits: { type: Number, default: 1 },
  createdAt: { type: Date, default: Date.now },
  lastUsed: { type: Date, default: Date.now },
});

// 🔥 Add a compound unique index so duplicate roadmaps by field+skillLevel are avoided
roadmapSchema.index({ field: 1, skillLevel: 1 }, { unique: true });

export const Roadmap = mongoose.model("Roadmap", roadmapSchema);
