const Product = require("./models/product");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/farmStand")
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((err) => console.log(err));

// const p = new Product({ name: "Red Apple", price: 5, category: "fruit" });

// p.save()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => console.log(err));

const seedProducts = [
  {
    name: "Yellow Orange",
    price: 6,
    category: "fruit",
  },
  {
    name: "Potato",
    price: 2,
    category: "vegetable",
  },
  {
    name: "Milk",
    price: 3,
    category: "dairy",
  },
  {
    name: "banana",
    price: 5,
    category: "fruit",
  },
];

Product.insertMany(seedProducts)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
