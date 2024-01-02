const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose
  .connect("mongodb://127.0.0.1:27017/relationshipDemo")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const userSchema = new Schema({
  name: String,
  age: Number,
});

const tweetSchema = new Schema({
  text: String,
  likes: Number,
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const User = mongoose.model("User", userSchema);
const Tweet = mongoose.model("Tweet", tweetSchema);

// async function makeTweets() {
//   const user = await User.findOne({ name: "Danny" });
//   const tweet1 = new Tweet({ text: "I like basketball", likes: 20 });
//   const tweet2 = new Tweet({ text: "I like cars", likes: 14 });
//   tweet2.user = user;
//   await tweet2.save();
// }

// makeTweets();

async function findTweet() {
  const tweet = await Tweet.find({}).populate("user", "name");
  console.log(tweet);
}
findTweet();
