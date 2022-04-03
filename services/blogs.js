import axios from "axios";

const endpoint = "http://localhost:1337/api/blogs";

const getAll = async () => {
  try {
    return await axios.get(endpoint);
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

const getOne = async (slug) => {
  try {
    return await axios.get(endpoint + `/${slug}`);
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

const exp = {
  getAll,
  getOne,
};

export default exp;
