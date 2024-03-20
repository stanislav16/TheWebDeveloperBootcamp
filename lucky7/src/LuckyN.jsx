import { useState } from "react";
import { getRolls, sum } from "./utils";
import Dice from "./Dice";
import Button from "./Button";

export default function LuckyN({ title, rolls = 2, winCheck }) {
  const [dice, setDice] = useState(getRolls(rolls));
  const won = winCheck(dice);

  function roll() {
    setDice(getRolls(rolls));
  }

  return (
    <main>
      <h1>
        {title} {won && "You won!"}
      </h1>
      <Dice dice={dice} />
      <Button onClick={roll} />
    </main>
  );
}
