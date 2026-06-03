const axios = require("axios");

const fetchGithubData = async (username) => {
  console.log(
    `🌐 Fetching from GitHub API: ${username}`
  );

  const userResponse = await axios.get(
    `https://api.github.com/users/${username}`
  );

  const repoResponse = await axios.get(
    `https://api.github.com/users/${username}/repos`
  );

  console.log(
    `✅ GitHub API response received: ${username}`
  );

  return {
    user: userResponse.data,
    repos: repoResponse.data,
  };
};

module.exports = {
  fetchGithubData,
};