import githubApi from "./githubApi";


export const fetchAdvancedUsers = async ({
  username,
  location,
  minRepos,
  page = 1,
}) => {
  let query = `${username}`;

  if (location) {
    query += ` location:${location}`;
  }

  if (minRepos) {
    query += ` repos:>=${minRepos}`;
  }

  const response = await githubApi.get("/search/users", {
    params: {
      q: query,
      page,
      per_page: 10,
    },
  });
  https://api.github.com/search/users?q

  return response.data;
};
