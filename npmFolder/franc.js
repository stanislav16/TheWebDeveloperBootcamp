const franc = require("franc");
const langs = require("langs");
const colors = require("colors");
const language = process.argv[2];
const code = franc(language);
if (code == "und") {
  console.log("dont know");
} else {
  const langObj = langs.where("3", code);
  console.log(langObj.name.green);
}
