const btn1 = document.querySelector("#p1Button");
const btn2 = document.querySelector("#p2Button");
const btnReset = document.querySelector("#reset");
const score1 = document.querySelector("#p1Display");
const score2 = document.querySelector("#p2Display");
let sumScore1 = 0;
let sumScore2 = 0;

let maxScore = document.querySelector("#playto");

btn1.addEventListener("click", (e) => {
  let playTo = maxScore.value;

  if (sumScore1 < playTo) {
    sumScore1 += 1;
    score1.innerText = sumScore1;
    console.log(sumScore1);
  }
  if (sumScore1 == playTo) {
    score1.style.color = "green";
    score2.style.color = "red";
    btn1.style.opacity = "0.6";
    btn2.style.opacity = "0.6";
    btn1.disabled = true;
    btn2.disabled = true;
  }
});

btn2.addEventListener("click", (e) => {
  let playTo = maxScore.value;

  if (sumScore2 < playTo) {
    sumScore2 += 1;
    score2.innerText = sumScore2;
    console.log(sumScore2);
  }
  if (sumScore2 == playTo) {
    score2.style.color = "green";
    score1.style.color = "red";
    btn1.style.opacity = "0.6";
    btn2.style.opacity = "0.6";
    btn1.disabled = true;
    btn2.disabled = true;
  }
});

function reset() {
  sumScore1 = 0;
  sumScore2 = 0;
  score1.innerText = 0;
  score2.innerText = 0;
  score1.style.color = "black";
  score2.style.color = "black";
  btn1.style.opacity = 1;
  btn2.style.opacity = 1;
  btn1.disabled = false;
  btn2.disabled = false;
}

btnReset.addEventListener("click", reset);

maxScore.addEventListener("change", reset);
