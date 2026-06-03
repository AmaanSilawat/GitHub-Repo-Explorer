const express = require("express");
const cache = require("../cache/cache");
const { fetchGithubData } = require("../services/githubService");
const axios = require("axios");

const router = express.Router();

/* SEARCH SUGGESTIONS ROUTE */
router.get("/search-users/:query", async (req, res) => {
  try {
    const { query } = req.params;

    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}&per_page=5`
    );

    const users = response.data.items.map((user) => ({
      login: user.login,
      avatar_url: user.avatar_url,
    }));

    res.json(users);
  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      message: "Failed to fetch suggestions",
    });
  }
});

/* EXISTING USER ROUTE */
router.get("/:username", async (req, res) => {
  try {
    const { username } = req.params;

    const cachedData = cache.get(username);

    if (cachedData) {
      console.log(`✅ CACHE HIT: ${username}`);

      return res.json({
        source: "cache",
        ...cachedData,
      });
    }

    console.log(`❌ CACHE MISS: ${username}`);

    const data = await fetchGithubData(username);

    console.log(`💾 SAVED TO CACHE: ${username}`);

    cache.set(username, data);

    res.json({
      source: "github",
      ...data,
    });
  } catch (error) {
    console.error(`❌ ERROR: ${error.message}`);

    res.status(404).json({
      message: "GitHub user not found",
    });
  }
});

module.exports = router;