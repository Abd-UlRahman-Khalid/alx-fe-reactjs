import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.REACT_APP_GITHUB_API_KEY || "https://api.github.com",
});

/**
 * Fetch user data from GitHub API based on search parameters.
 *
 * @param {Object} params - Search parameters.
 * @param {string} params.username - GitHub username to search for.
 * @param {string} [params.location] - User's location.
 * @param {number} [params.minRepos] - Minimum number of public repositories.
 * @returns {Promise<Object>} The response data from the GitHub API.
 */
export const fetchUserData = async ({
  username,
  location = "",
  minRepos = "",
}) => {
  // Construct the query string
  let query = `q=${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  try {
    const response = await api.get(`/search/users?${query}`);
    return response.data.items; // Returns an array of user objects
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
