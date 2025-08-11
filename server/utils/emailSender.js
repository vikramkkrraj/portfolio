// utils/sendEmail.js
import nodemailer from "nodemailer";

export const sendEmail = async (name, senderEmail, message) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: senderEmail, 
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${name}`,
      text: `From: ${name}\nEmail: ${senderEmail}\n\n${message}`,
    });
  } catch (error) {
    console.error("Error in sending mail:", error);
    throw error; // forward error to controller for response
  }
};
