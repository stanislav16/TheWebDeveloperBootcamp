const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/user");
const session = require("express-session");

mongoose.connect("mongodb://localhost:27017/authDemo");

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "secret" }));

app.get("/", (req, res) => {
  res.render("HOME PAGE");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 12);
  const user = new User({
    username,
    password: hash,
  });
  await user.save();
  req.session.user_id = user._id;
  res.redirect("/");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  validPass = await bcrypt.compare(password, user.password);
  if (validPass) {
    req.session.user_id = user._id;
    res.redirect("/secret");
  } else {
    res.redirect("/login");
  }
});

app.get("/secret", (req, res) => {
  if (!req.session.user_id) {
    res.redirect("/login");
  } else {
    res.send("SECRET PAGE");
  }
});

app.listen(3000, () => {
  console.log("SERVER STARTED");
});
