const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("tiny"));

app.use(function (req, res, next) {
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
});

app.use("/dogs", function (req, res, next) {
  console.log("I LOVE DOGS");
  next();
});

function verifyPass(req, res, next) {
  const { password } = req.query;
  if (password === "chickennugget") {
    next();
  } else {
    res.send("SORRY YOU NEED A PASSWORD");
  }
}

app.get("/", function (req, res) {
  console.log(`Request time ${req.requestTime}`);
  res.send("HOME PAGE");
});

app.get("/dogs", function (req, res) {
  console.log(`Request time ${req.requestTime}`);
  res.send("WOOF WOOF");
});

app.get("/secret", verifyPass, function (req, res) {
  res.send("My secret: BALBLALBALBLABLABLBLABL");
});

app.use(function (req, res) {
  res.status(404).send("NOT FOUND");
});

app.listen(3000);
