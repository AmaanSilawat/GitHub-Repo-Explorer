const express = require("express");
const cors = require("cors");

const githubRoutes = require("./routes/githubRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "GitHub Repo Explorer Backend Running",
  });
});

app.use("/api/github", githubRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});