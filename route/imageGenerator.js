const express = require("express");
const router = express.Router();
const control = require("../controller/imageGenerate.js");

router.post("/quoteChange", control.quote);

module.exports = router;
