const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/shopDB")
  .then(() => {
    console.log("Connection opened");
  })
  .catch((err) => console.log(err));

const personSchema = mongoose.Schema({
  first: String,
  last: String,
});

personSchema.virtual("fullName").get(function () {
  return `${this.first} ${this.last}`;
});

personSchema.pre("save", async function () {
  this.first = "YO";
  this.last = "MAMA";
  console.log("about to save");
});

personSchema.post("save", async function () {
  console.log("saved");
});

const Person = mongoose.model("Person", personSchema);
