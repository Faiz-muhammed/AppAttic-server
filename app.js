const express = require("express");
const env = require("dotenv");
const cors = require("cors");

env.config();

const imageGenerationRouter= require("./route/imageGenerator")
// server setup

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors({ origin: ["http://184.72.69.144/appattic"], credentials: true }));

app.use("/api",imageGenerationRouter)

app.listen(PORT, (err) => {
  console.log(`listening at :${PORT}`);
});

module.exports = app;

