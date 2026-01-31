import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Accept: "application/vnd.github+json",
    Authorization: import.meta.env.VITE_APP_GITHUB_API_KEY
      ? `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
      : undefined,
  },
});


export const fetchUserData = async (username) => {
  const response = await githubApi.get(`/users/${username}`);
  return response.data;
};

export default githubApi;