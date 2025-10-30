export const SignupEmailTemplate = (user, otp) => {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Verify Your AI Career Account</title>
  <style>
    body {
      font-family: 'Poppins', 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
      margin: 0;
      padding: 0;
      color: #fff;
    }
    .email-container {
      max-width: 600px;
      margin: 40px auto;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
      padding: 40px;
      backdrop-filter: blur(10px);
    }
    .header {
      text-align: center;
      padding-bottom: 20px;
    }
    .header img {
      width: 70px;
      margin-bottom: 15px;
    }
    .header h2 {
      color: #00e0ff;
      margin: 0;
      font-size: 24px;
    }
    .content {
      padding: 20px 0;
      text-align: center;
    }
    .content p {
      font-size: 16px;
      color: #e0e0e0;
      line-height: 1.6;
    }
    .otp-box {
      background: linear-gradient(90deg, #48c6ef, #6f86d6);
      color: #fff;
      font-size: 28px;
      font-weight: bold;
      padding: 15px;
      text-align: center;
      border-radius: 10px;
      letter-spacing: 4px;
      margin: 25px auto;
      width: fit-content;
      box-shadow: 0 0 10px rgba(72, 198, 239, 0.7);
    }
    .footer {
      font-size: 12px;
      color: #bbb;
      text-align: center;
      padding-top: 20px;
      border-top: 1px solid rgba(255, 255, 255, 0.2);
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <img src="https://cdn-icons-png.flaticon.com/512/4712/4712100.png" alt="AI Logo" />
      <h2>Welcome to AI Career Path Finder</h2>
    </div>
    <div class="content">
      <p>Hello <strong>${user.fullName}</strong>, 👋</p>
      <p>Thanks for joining <strong>AI Career Path Finder</strong> 🚀</p>
      <p>To complete your signup and unlock your personalized AI career roadmap, please verify your email using the code below:</p>
      
      <div class="otp-box">${otp}</div>

      <p>This OTP will expire in <strong>10 minutes</strong>.</p>
      <p>If you didn’t sign up for this account, you can safely ignore this email.</p>
    </div>
    <div class="footer">
      &copy; ${new Date().getFullYear()} AI Career Path Finder. All rights reserved.<br/>
      Designed with ❤️ for future AI innovators.
    </div>
  </div>
</body>
</html>`;
};
