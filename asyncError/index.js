const express = require("express");
const mongoose = require("mongoose");

const Product = require("./models/product");
const AppError = require("./appError");

const methodOverride = require("method-override");

const app = express();
const path = require("path");

const categories = ["fruit", "vegetable", "dairy"];

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

mongoose
  .connect("mongodb://127.0.0.1:27017/farmStand2")
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((err) => console.log(err));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get(
  "/products",
  wrapAsync(async function (req, res, next) {
    const { category } = req.query;
    if (category) {
      const products = await Product.find({ category: category });
      res.render("products/index", { products: products, category });
    } else {
      const products = await Product.find({});
      res.render("products/index", { products: products, category: "All" });
    }
  })
);

app.get("/products/new", function (req, res) {
  res.render("products/new", { categories: categories });
});

app.post(
  "/products",
  wrapAsync(async function (req, res, next) {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/`);
  })
);

function wrapAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((error) => next(error));
  };
}

app.get(
  "/products/:id",
  wrapAsync(async function (req, res, next) {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      throw new AppError("Product not found", 404);
    } else {
      res.render("products/show", { product });
    }
  })
);

app.get(
  "/products/:id/edit",
  wrapAsync(async function (req, res, next) {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      throw new AppError("Product not found", 404);
    } else {
      res.render("products/edit", { product, categories });
    }
  })
);

app.put(
  "/products/:id",
  wrapAsync(async function (req, res, next) {
    const { id } = req.params;
    await Product.findByIdAndUpdate(id, req.body, { runValidators: true });
    res.redirect(`/products/${id}`);
  })
);

app.delete(
  "/products/:id",
  wrapAsync(async function (req, res) {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect(`/products`);
  })
);

function handleValidationError(err) {
  console.log(err);
  return new AppError(`Validation failed...${err.message}`, 400);
}

app.use(function (err, req, res, next) {
  console.log(err.name);
  if (err.name === "ValidationError") {
    err = handleValidationError(err);
    next(err);
  } else {
    next(err);
  }
});

app.use(function (err, req, res, next) {
  const { status = 500, message = "Something went wrong" } = err;
  res.status(status).send(message);
});

app.listen(3000);
