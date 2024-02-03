const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();

let transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_MAIL, // generated ethereal user
    pass: process.env.SMTP_PASSWORD, // generated ethereal password
  },
});

const sendEmail = expressAsyncHandler(async (req, res) => {
  const { name, email, message } = req.body;

  var mailOptions = {
    from: email,
    to: process.env.SMTP_MAIL,
    name: name,
    text: message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Failed to send email",
        error: error.message,
      });
    } else {
      console.log("Email sent successfully!");
      res
        .status(200)
        .json({ success: true, message: "Email sent successfully!" });
    }
  });
});

module.exports = { sendEmail };
