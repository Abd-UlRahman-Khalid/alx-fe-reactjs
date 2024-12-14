import axios from "axios";

/**
 * Search GitHub users based on criteria.
 *
 * @param {Object} params - Search parameters.
 * @param {string} params.username - GitHub username to search for.
 * @param {string} [params.location] - User's location (optional).
 * @param {number} [params.minRepos] - Minimum number of public repositories (optional).
 * @returns {Promise<Object>} The search result from GitHub API.
 */
export const searchGitHubUsers = async ({ username, location, minRepos }) => {
  let query = `q=${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  try {
    const response = await axios.get(
      `https://api.github.com/search/users?${query}`
    );
    return response.data;
  } catch (error) {
    console.error("Error searching GitHub users:", error);
    throw error;
  }
};
