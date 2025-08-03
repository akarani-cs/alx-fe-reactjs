import axios from "axios";

/**
 * Fetch GitHub users based on advanced search criteria.
 * Uses GitHub's Search API: https://api.github.com/search/users
 *
 * @param {Object} params
 * @param {string} params.username - GitHub username or partial match
 * @param {string} params.location - Location filter (optional)
 * @param {number} params.minRepos - Minimum public repositories (optional)
 * @returns {Promise<Object>} - Search results from GitHub API
 */
export const fetchUserData = async ({ username, location, minRepos }) => {
  try {
    let query = "";

    // Add username or keyword
    if (username) {
      query += `${username} in:login`; // search only in username
    }

    // Add location filter
    if (location) {
      query += ` location:${location}`;
    }

    // Add minimum repo filter
    if (minRepos) {
      query += ` repos:>=${minRepos}`;
    }

    const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY || ""}`, // Optional token to increase rate limit
      },
    });

    return response.data; // Contains { total_count, items: [] }
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    throw error;
  }
};
