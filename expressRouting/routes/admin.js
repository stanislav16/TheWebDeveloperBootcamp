const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  if (req.query.isAdmin) {
    next();
  } else {
    res.send("SORRY NOT AN ADMIN");
  }
});
router.get("/secret", (req, res) => {
  res.send("THIS IS A SECRET");
});

router.get("/deleteall", (req, res) => {
  res.send("ALL DELETED");
});

module.exports = router;
