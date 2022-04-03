import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.send("Not allowed");
  const { email } = req.body;

  if (!email) return res.status(400).json({ error: "Please provide email" });

  try {
    await axios.post(`${process.env.API_URL}/api/subscribers`, {
      data: { email },
    });

    return res.json({ success: true });
  } catch (err) {
    return res.json({ success: false, error: "failed subscribing email" });
  }
}
