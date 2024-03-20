import "./App.css";
import Die from "./Die";
import LuckyN from "./LuckyN";
import Dice from "./Dice";
import { sum } from "./utils";
import Test from "./Test";
function lessThan4(dice) {
  return sum(dice) < 4;
}
function sameNumber(dice) {
  return dice.every((num) => num === dice[0]);
}
function App() {
  return (
    <>
      <LuckyN title={"Roll less than 4"} rolls={2} winCheck={lessThan4} />
      <LuckyN title={"Roll the same number"} rolls={2} winCheck={sameNumber} />
      {/* <Test /> */}
    </>
  );
}

export default App;
