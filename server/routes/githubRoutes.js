const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/:username", async (req, res) => {
  try {
    const { username } = req.params;

    const userResponse = await axios.get(
      `https://api.github.com/users/${username}`
    );

    const repoResponse = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );

    res.json({
      user: userResponse.data,
      repos: repoResponse.data,
    });
  } catch (error) {
    res.status(404).json({
      message: "User not found",
    });
  }
});

module.exports = router;