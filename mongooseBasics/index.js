const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/moviesDB")
  .then(() => {
    console.log("Connection opened");
  })
  .catch((err) => console.log(err));

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

const Movie = mongoose.model("Movie", movieSchema);

// const broke = new Movie({
//   title: "Broken",
//   year: 1990,
//   score: 7.4,
//   rating: "R",
// });

Movie.insertMany([
  { title: "Trolls", year: 2020, score: 7, rating: "none" },
  { title: "Oppenhaimer", year: 2023, score: 9, rating: "R" },
  { title: "Iron man", year: 2013, score: 8, rating: "R" },
]).then((data) => {
  console.log(data);
});
