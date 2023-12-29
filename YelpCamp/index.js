const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
mongoose
  .connect("mongodb://127.0.0.1:27017/yelpCamp")
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((err) => console.log(err));
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(morgan("tiny"));

app.use(methodOverride("_method"));

const Campground = require("./models/campground");
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", function (req, res) {
  res.send("Hello from yelpcamp");
});

app.get("/campgrounds", async function (req, res) {
  const camps = await Campground.find({});
  res.render("camps/index", { camps });
});

app.get("/campgrounds/new", async function (req, res) {
  res.render("camps/new");
});

app.post("/campgrounds", async function (req, res) {
  const newCamp = new Campground(req.body.campground);
  await newCamp.save();
  res.redirect(`campgrounds/${newCamp._id}`);
});

app.get("/campgrounds/:id", async function (req, res) {
  const { id } = req.params;
  const camp = await Campground.findById(id);
  res.render("camps/show", { camp });
});

app.get("/campgrounds/:id/edit", async function (req, res) {
  const { id } = req.params;
  const camp = await Campground.findById(id);
  res.render("camps/edit", { camp });
});

app.put("/campgrounds/:id", async function (req, res) {
  const { id } = req.params;
  const camp = await Campground.findByIdAndUpdate(id);
  camp.set(req.body.campground);
  await camp.save();
  res.redirect(`/campgrounds/${camp._id}`);
});
app.delete("/campgrounds/:id", async function (req, res) {
  const { id } = req.params;
  const camp = await Campground.findByIdAndDelete(id);
  res.redirect("/campgrounds");
});

app.listen(3000);
