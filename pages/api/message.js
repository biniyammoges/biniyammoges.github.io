import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.send("Not allowed");

  const { name, email, message } = req.body;
  if (!email || !name || !message)
    return res.json({ success: false, error: "Please provide in all fields" });

  try {
    const { data } = await axios.post(`${process.env.API_URL}/api/messages`, {
      data: { name, email, message },
    });

    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, error: "Failed sending message" });
  }
}
