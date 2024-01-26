const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser("secret"));
app.get("/greet", (req, res) => {
  const { name = "No-name" } = req.cookies;
  res.send("Hello, " + name);
});

app.get("/setname", (req, res) => {
  res.cookie("name", "john snow");
  res.cookie("game", "demon souls");
  res.send("sent you a cookie");
});

app.get("/getsignedcookie", (req, res) => {
  res.cookie("fruit", "apple", { signed: true });
  res.send("sent you a signed cookie");
});

app.get("/verifyfruit", (req, res) => {
  res.send("The fruit is " + req.signedCookies.fruit);
});

app.listen(3000, () => {
  console.log("Server started");
});
