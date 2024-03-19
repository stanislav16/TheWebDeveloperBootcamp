import { useState } from "react";
export default function ScoreCounter() {
  const [scores, setScores] = useState({ p1Score: 0, p2Score: 0 });
  function addP1Score() {
    setScores((prevScores) => ({
      ...prevScores,
      p1Score: prevScores.p1Score + 1,
    }));
  }
  function addP2Score() {
    setScores((prevScores) => ({
      ...prevScores,
      p2Score: prevScores.p2Score + 1,
    }));
  }
  return (
    <div>
      <h3>Player 1: {scores.p1Score}</h3>
      <h3>Player 2: {scores.p2Score}</h3>
      <button onClick={addP1Score}>+1 P1</button>
      <button onClick={addP2Score}>+1 P2</button>
    </div>
  );
}
