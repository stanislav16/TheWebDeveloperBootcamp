const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("ALL DOGS");
});
router.post("/", (req, res) => {
  res.send("NEW DOG");
});

router.get("/:id", (req, res) => {
  res.send("ONE DOG");
});

router.get("/:id/edit", (req, res) => {
  res.send("EDIT DOG");
});

module.exports = router;
