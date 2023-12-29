const express = require("express");
const mongoose = require("mongoose");

const Product = require("./models/product");

const methodOverride = require("method-override");

const app = express();
const path = require("path");

const categories = ["fruit", "vegetable", "dairy"];

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

mongoose
  .connect("mongodb://127.0.0.1:27017/farmStand")
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((err) => console.log(err));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/products", async function (req, res) {
  const { category } = req.query;
  if (category) {
    const products = await Product.find({ category: category });
    res.render("products/index", { products: products, category });
  } else {
    const products = await Product.find({});
    res.render("products/index", { products: products, category: "All" });
  }
});

app.get("/products/new", function (req, res) {
  res.render("products/new", { categories: categories });
});

app.post("/products", async function (req, res) {
  const newProduct = new Product(req.body);
  try {
    await newProduct.save();
  } catch {
    (function (err) {
      console.log(err);
    });
  }
  res.redirect("/products");
});

app.get("/products/:id", async function (req, res) {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("products/show", { product });
});

app.get("/products/:id/edit", async function (req, res) {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("products/edit", { product, categories });
});

app.put("/products/:id", async function (req, res) {
  const { id } = req.params;
  await Product.findByIdAndUpdate(id, req.body, { runValidators: true });
  res.redirect(`/products/${id}`);
});

app.delete("/products/:id", async function (req, res) {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.redirect(`/products`);
});

app.listen(3000);
