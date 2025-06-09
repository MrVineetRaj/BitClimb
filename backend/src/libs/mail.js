import Mailgen from "mailgen";
import nodemailer from "nodemailer";
import { ApiError } from "./helpers.js";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMail = async (options) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "BitClimb",
      link: "https://www.bitclimb.lib/",
    },
  });

  //info : Generate an HTML email with the provided contents
  const emailHTML = mailGenerator.generate(options.mailGenContent);

  //info : Generate the plaintext version of the e-mail (for clients that do not support HTML)
  const emailText = mailGenerator.generatePlaintext(options.mailGenContent);

  const mailOptions = {
    from: `"BitClimb" <${process.env.MAILTRAP_SMTP_EMAIL}>`, // sender address
    to: options.email, // list of receivers
    subject: options.subject, // Subject line
    html: emailHTML, // html body
  };


  const { data, error } = await resend.emails.send(mailOptions);
  console.log("Mail sent successfully", data);
  if (error) {
    console.error("Error sending email:", err);
    throw new ApiError(500, "Error Sending the mail", err);
  } else{
    console.log(data)
  }
};

const emailVerificationMailContent = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro: "Welcome to BitClimb! We're very excited to have you on board.",
      action: {
        instructions: "To get started with BitClimb, please click here:",
        button: {
          color: "#22BC66", // info :Optional action button color
          text: "Verify your email",
          link: verificationUrl,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };
};

const forgotPasswordMailContent = (username, passwordResetURL) => {
  return {
    body: {
      name: username,
      intro: "Forgot your password? No worries we are here for you.",
      action: {
        instructions: "To reset your password for BitClimb, please click here:",
        button: {
          color: "#22BC66", // info :Optional action button color
          text: "ResetPassword",
          link: passwordResetURL,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };
};

export { sendMail, emailVerificationMailContent, forgotPasswordMailContent };
