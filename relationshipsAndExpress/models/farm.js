const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Product = require("./product");

const farmSchema = new Schema({
  name: {
    type: String,
    required: [true, "Farm must have a name"],
  },
  location: {
    type: String,
    required: [true, "Farm must have a location"],
  },
  email: {
    type: String,
    required: [true, "Farm must have an email"],
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

farmSchema.post("findOneAndDelete", async function (farm) {
  if (farm.products.length) {
    await Product.deleteMany({ _id: { $in: farm.products } });
  }
});

const Farm = mongoose.model("Farm", farmSchema);

module.exports = Farm;
