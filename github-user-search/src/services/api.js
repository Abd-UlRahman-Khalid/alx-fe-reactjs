import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_GITHUB_API_BASE_URL,
});

export const searchGitHubUsers = (query) => api.get(`/search/users?q=${query}`);
