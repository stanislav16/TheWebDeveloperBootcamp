import { useState } from "react";
export default function ScoreKeeper({ numPlayers = 2 }) {
  const [scores, setScores] = useState(Array(numPlayers).fill(0));

  function addScore(index) {
    setScores((prevScore) =>
      prevScore.map((s, i) => (i === index ? s + 1 : s))
    );
  }

  function subtractScore(index) {
    setScores((prevScore) =>
      prevScore.map((s, i) => (i === index ? s - 1 : s))
    );
  }

  function resetScore() {
    setScores((prevScore) => prevScore.map((s) => (s = 0)));
  }

  return (
    <>
      {scores.map((s, i) => (
        <div key={i}>
          <h1>Player {i + 1}</h1>
          <p>Score: {s}</p>
          <button onClick={() => addScore(i)}>+</button>
          <button onClick={() => subtractScore(i)}>-</button>
        </div>
      ))}

      <button onClick={resetScore}>Reset</button>
    </>
  );
}
