import axios from "axios";

const API_BASE_URL = "https://api.github.com";
const GITHUB_API_KEY = import.meta.env.REACT_APP_GITHUB_API_KEY;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `token ${GITHUB_API_KEY}`,
  },
});

export const fetchUserData = async (username) => {
  if (!username) throw new Error("Username is required");
  const response = await api.get(`/users/${username}`);
  return response.data;
};
