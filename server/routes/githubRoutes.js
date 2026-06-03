const express = require("express");
const cache = require("../cache/cache");
const { fetchGithubData } = require("../services/githubService");

const router = express.Router();

router.get("/:username", async (req, res) => {
  try {
    const { username } = req.params;

    const cachedData = cache.get(username);

    if (cachedData) {
      return res.json({
        source: "cache",
        ...cachedData,
      });
    }

    const data = await fetchGithubData(username);

    cache.set(username, data);

    res.json({
      source: "github",
      ...data,
    });
  } catch (error) {
    res.status(404).json({
      message: "GitHub user not found",
    });
  }
});

module.exports = router;