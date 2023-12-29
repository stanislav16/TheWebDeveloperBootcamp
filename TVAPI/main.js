const form = document.querySelector("#form");
const input = document.querySelector("#query");

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  const value = input.value;
  const response = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${value}`
  );
  makeImages(response.data);
});

const makeImages = (shows) => {
  for (let show of shows) {
    const img = document.createElement("img");
    img.src = show.show.image.medium;
    document.body.append(img);
  }
};
