const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/shopDB")
  .then(() => {
    console.log("Connection opened");
  })
  .catch((err) => console.log(err));

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    min: [0, "Price must be positive"],
    required: true,
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: [String],
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
    size: {
      type: String,
      enum: ["S", "M", "L"],
    },
  },
});

productSchema.methods.greet = function () {
  console.log("Hellooooooooooooooo");
  console.log(`- from ${this.name}`);
};

productSchema.methods.toggleOnSale = function () {
  this.onSale = !this.onSale;
  return this.save();
};

productSchema.methods.addCategory = function (newCat) {
  this.categories.push(newCat);
  return this.save();
};

productSchema.statics.fireSale = function () {
  return this.updateMany({}, { onSale: true, price: 0 });
};

const Product = mongoose.model("Product", productSchema);

// const bike = new Product({
//   name: "T-Shirt",
//   price: 20,
//   categories: ["Mountain", "Dirt"],
//   qty: { online: 6, inStore: 10 },
//   size: "S",
// });

async function findProduct() {
  const foundProduct = await Product.findOne({ name: "Tires" });
  foundProduct.greet();
  console.log(foundProduct);
  await foundProduct.toggleOnSale();
  console.log(foundProduct);
  await foundProduct.addCategory("Outdoors");
  console.log(foundProduct);
}

async function makeOnSale() {
  try {
    const onSale = await Product.fireSale();
    console.log(onSale);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

makeOnSale();

// bike
//   .save()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// Product.findOneAndUpdate(
//   { name: "Tires" },
//   { price: 19 },
//   { new: true, runValidators: true }
// )
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
