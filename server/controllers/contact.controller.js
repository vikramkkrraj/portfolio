import { sendEmail } from '../utils/emailSender.js'

export const handleContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    await sendEmail(name, email, message);
    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error("Error sending contact message:", err);
    res.status(500).json({ success: false, message: "Failed to send message." });
  }
};
