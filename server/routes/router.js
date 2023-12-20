const express = require("express");
const router = express.Router();
const authRouter = require("./authRouter");
const displayRouter = require("./linkRouter");

// User auth router
router.use("/auth", authRouter);

// Display router
router.use("/display", displayRouter);

module.exports = router;
