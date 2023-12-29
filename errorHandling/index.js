const express = require("express");
const app = express();
const morgan = require("morgan");
const AppError = require("./appError");
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
    throw new AppError("Password required!", 401);
    // res.send("SORRY YOU NEED A PASSWORD");
    // res.status(401);
    // throw new Error("Password required");
  }
}

app.get("/", function (req, res) {
  console.log(`Request time ${req.requestTime}`);
  res.send("HOME PAGE");
});

app.get("/error", function (req, res) {
  chicken.fly();
});

app.get("/dogs", function (req, res) {
  console.log(`Request time ${req.requestTime}`);
  res.send("WOOF WOOF");
});

app.get("/secret", verifyPass, function (req, res) {
  res.send("My secret: BALBLALBALBLABLABLBLABL");
});

app.get("/admin", function (req, res) {
  throw new AppError("You are not an admin", 403);
});

app.use(function (req, res) {
  res.status(404).send("NOT FOUND");
});

// app.use(function (err, req, res, next) {
//   console.log("ERROR");
//   // res.status(500).send("ERROR");
//   next(err);
// });

app.use(function (err, req, res, next) {
  const { status = 500, message = "Something went wrong" } = err;
  res.status(status).send(message);
});

app.listen(3000);
