import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import EmojiClicker from "./EmojiClicker";
import ScoreCounter from "./ScoreCounter";
import ScoreKeeper from "./ScoreKeeper";
function App() {
  return (
    <>
      <ScoreKeeper numPlayers={4} />
      {/* <EmojiClicker /> */}
      {/* <ScoreCounter /> */}
      {/* <Counter /> */}
    </>
  );
}

export default App;
