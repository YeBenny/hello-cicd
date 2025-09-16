const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello CI/CD from Node.js + Express + Docker + GHCR + ECS!");
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running at http://0.0.0.0:${port}`);
  });
}

module.exports = app;
