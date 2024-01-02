const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose
  .connect("mongodb://127.0.0.1:27017/relationshipDemo")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const productSchema = new Schema({
  name: String,
  price: Number,
  season: {
    type: String,
    enum: ["Spring", "Summer", "Autumn", "Winter"],
  },
});

const farmSchema = new Schema({
  name: String,
  city: String,
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
});

const Product = mongoose.model("Product", productSchema);
const Farm = mongoose.model("Farm", farmSchema);

// Product.insertMany([
//   { name: "melon", price: 10, season: "Summer" },
//   { name: "orange", price: 5, season: "Winter" },
//   { name: "apple", price: 2, season: "Autumn" },
// ]);

async function makeFarm() {
  const farm = new Farm({ name: "Rancho", city: "Sofia" });
  const melon = await Product.findOne({ name: "melon" });
  farm.products.push(melon);
  await farm.save();
}

async function addProduct() {
  const farm = await Farm.findOne({ name: "Rancho" });
  const orange = await Product.findOne({ name: "orange" });
  farm.products.push(orange);
  await farm.save();
}

Farm.findOne({ name: "Rancho" })
  .populate("products")
  .then((farm) => console.log(farm));
