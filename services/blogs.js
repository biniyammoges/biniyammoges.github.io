import axios from "axios";
const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/api/blogs`;

const getAll = async (page = 1) => {
  return (await axios.get(endpoint + `?page=${page}&sort=desc`)).data;
};

const getOne = async (slug) => {
  try {
    return (await axios.get(`${process.env.API_URL}/api/blogs/${slug}`)).data;
  } catch (err) {
    return {
      data: null,
      error:
        err.code === "ECONNREFUSED"
          ? "Connection Failed"
          : "Failed to fetch blogs",
    };
  }
};

const getRelated = async (tags, id) => {
  const limit = 4;
  const primaryTag = tags.split(",")[0];

  try {
    // return blogs where id not equal to the given id and have the same tag name
    const { data } = await axios.get(
      `${process.env.API_URL}/api/blogs?filters[id][$not]=${id}&filters[tags][$eq]=${primaryTag}&pagination[pageSize]=${limit}`
    );
    return data;
  } catch (err) {
    console.log(err);
    return { data: null, error: err.message || "Failed to fetch" };
  }
};

const exp = {
  getAll,
  getOne,
  getRelated,
};

export default exp;
