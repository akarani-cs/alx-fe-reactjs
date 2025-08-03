import API from "./api";

export const getGitHubUser = async (username) => {
  const response = await API.get(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
    }
  });
  return response.data;
};
