const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/relationshipDemo")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  addresses: [
    {
      _id: { _id: false },
      city: String,
      state: String,
      country: String,
      street: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

async function createUser() {
  const u = new User({
    firstName: "Danny",
    lastName: "Red",
  });
  u.addresses.push({
    city: "Sofia",
    state: "Sofia",
    country: "Bulgaria",
    street: "Parashutist 50",
  });

  await u.save();
}
createUser();

async function addAddress(id) {
  const user = await User.findById(id);
  user.addresses.push({
    city: "Varna",
    state: "Varna",
    country: "Bulgaria",
    street: "Galabec 8",
  });
  await user.save();
}

addAddress("659325fa2570145fc2e74dd3");
