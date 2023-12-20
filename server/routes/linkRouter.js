const express = require("express");
const router = express.Router();
const linkController = require("../controllers/linkController");

router
  // Get all items
  .get("/get", linkController.getLink, (req, res) => {
    return res.status(200).json(res.locals.components);
  })

  // Add item
  .post("/add", linkController.addLink, (req, res) => {
    return res.status(201).json(res.locals.component);
  })

  // Delete item
  .delete("/delete/:itemId", linkController.deleteLink, (req, res) => {
    res.status(200).json(res.locals.components);
  });

module.exports = router;
