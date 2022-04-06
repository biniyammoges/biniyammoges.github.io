import axios from "axios";
import { API_URL } from "@/config/index";

export default async function handler(req, res) {
  const page = req.query.page || 1;
  const pageSize = req.query.pageSize || 15;

  try {
    const { data } = await axios.get(
      `${API_URL}/api/blogs?pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort[createdAt]=desc`
    );

    return res.json({ data });
  } catch (err) {
    return res.json({
      data: null,
      error:
        err.code === "ECONNREFUSED"
          ? "Connection Failed"
          : "Failed to fetch blogs",
    });
  }
}
