const express = require("express");
const session = require("express-session");
const expressSession = require("express-session");
const app = express();
const sessionOptions = {
  secret: "secret",
  resave: false,
  saveUninitialized: false,
};
app.use(expressSession(sessionOptions));

app.get("/viewcount", (req, res) => {
  if (req.session.count) {
    req.session.count += 1;
  } else {
    req.session.count = 1;
  }
  res.send("You have viewed this page " + req.session.count + " times");
});

app.get("/register", (req, res) => {
  const { username = unknown } = req.query;
  req.session.username = username;
  res.redirect("/greet");
});

app.get("/greet", (req, res) => {
  const { username } = req.session;
  res.send("Hello, " + username);
});

app.listen(3000, () => {
  console.log("Server started");
});
