import axios from "axios";

export default async function handler(req, res) {
  const page = req.query.page || 1;
  const pageSize = req.query.pageSize || 15;
  // const tag = req.query?.tag;

  try {
    const { data } = await axios.get(
      `${process.env.API_URL}/api/blogs?pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort[createdAt]=desc`
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
