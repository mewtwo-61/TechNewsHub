const express = require("express");
const router = express.Router();

router
  // Get all items
  .get("/get", (req, res) => {
    return res.status(200).json(res.locals.items);
  })

  // Add item
  .post("/add", (req, res) => {
    return res.status(201).json(res.locals.items);
  })

  // Delete item
  .delete("./delete/:itemId", (req, res) => {
    res.status(200).json(res.locals.itemsList);
  });

module.exports = router;
