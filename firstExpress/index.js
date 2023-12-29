const express = require("express");
const app = express();
app.get("/", function (req, res) {
  res.send("<h1>Hello World</h1>");
});
app.get("/cats", (req, res) => {
  res.send("Meow");
});
app.get("/dogs", (req, res) => {
  res.send("Woof");
});
app.get("/r/:subreddit", (req, res) => {
  res.send("This is a subreddit");
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send("Nothing found if nothing searched");
  } else res.send(`<h1>Search results for ${q}</h1>`);
});
app.get("*", (req, res) => {
  res.send("This won't work");
});

app.listen(3000, () => {
  console.log("listening to port 3000");
});
