import bcrypt from "bcrypt"
import { User } from "@/models/user.model";
import nodemailer from "nodemailer";

interface SendEmailParams {
  email: string;
  emailType: string;
  userId: string;
}

export const sendEmail = async ({email, emailType, userId}: SendEmailParams) => {
  try {

            const hashedToken = await bcrypt.hash(userId.toString(), 10);

            if (emailType === "VERIFY") {
              await User.findByIdAndUpdate(userId, {
                verifyToken: hashedToken,
                verifyTokenExpiry: Date.now() + 3600000,
              });
            } else if (emailType === "RESET") {
              await User.findByIdAndUpdate(userId, {
                forgotPasswordToken: hashedToken,
                forgotPasswordTokenExpiry: Date.now() + 3600000,
              });
            }


    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    });

    const emailOptions = {
      from: "hi@demomailtrap.co", // sender address
      to: email, // list of receivers
      subject:
        emailType === "VERIFY" ? "Verify your Email" : "Reset your password", // Subject line
      text: "Hello world?", // plain text body
      html: `<p>Click <a href="${
        process.env.DOMAIN
      }/verifyemail?token=${hashedToken}">here</a> to ${
        emailType === "VERIFY" ? "verify your email" : "reset your password"
      }
            or copy and paste the link below in your browser. <br> ${
              process.env.DOMAIN
            }/verifyemail?token=${hashedToken}
            </p>`, // html body
    };
 const mailResponse =   await transporter.sendMail(emailOptions);
 return mailResponse;
  } 
  
  catch (error: any) {
    console.error("Error sending email:", error);
    throw new Error(error.message);
  }
};
