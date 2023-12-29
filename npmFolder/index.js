const jokes = require("give-me-a-joke");
const colors = require("colors");
const figlet = require("figlet");

// To get a random dad joke
jokes.getRandomDadJoke(function (joke) {
  console.log(joke.rainbow);
});
