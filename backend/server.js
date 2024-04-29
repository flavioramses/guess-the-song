require("dotenv").config();
const spotify = require("./services/spotifyConfig");
const express = require("express");
const App = express();

App.get("/", function someGet(req, res) {
  res.json({ message: "Great!" });
});

App.listen(5050, async function serverInit() {
  console.log("Server up and running!");
  require("./services/spotifyApi/users");
});
