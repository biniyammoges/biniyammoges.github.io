import axios from "axios";

import { API_URL, NEXT_PUBLIC_API_URL } from "@/config/index";
const endpoint = `${NEXT_PUBLIC_API_URL}/api/blogs`;

const getAll = async (page = 1) => {
  try {
    return (await axios.get(endpoint + `?page=${page}&sort=desc`)).data;
  } catch (error) {
    return { data: null, error: error.message };
  }
};

const getAllFromServer = async () => {
  const page = 1;
  const pageSize = 15;

  try {
    const { data } = await axios.get(
      `${API_URL}/api/blogs?pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort[createdAt]=desc`
    );

    return data;
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
    const { data } = await axios.get(`${API_URL}/api/blogs/${slug}`);

    return data;
  } catch (err) {
    const {
      error: { status, message },
    } = err?.response?.data;

    return {
      data: null,
      error:
        err.code === "ECONNREFUSED"
          ? "Connection Failed"
          : "Failed to fetch blogs",
      status: status ? status : 500,
    };
  }
};

const getRelated = async (tags, id) => {
  const limit = 4;
  const primaryTag = tags.split(",")[0];

  try {
    // return blogs where id not equal to the given id and have the same tag name
    const { data } = await axios.get(
      `${API_URL}/api/blogs?filters[id][$not]=${id}&filters[tags][$eq]=${primaryTag}&pagination[pageSize]=${limit}`
    );
    return data;
  } catch (err) {
    return { data: null, error: err.message || "Failed to fetch" };
  }
};

const exp = {
  getAll,
  getAllFromServer,
  getOne,
  getRelated,
};

export default exp;
