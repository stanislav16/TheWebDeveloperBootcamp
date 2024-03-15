import { useState } from "react";
export default function TogglerCounter() {
  const [isHappy, setIsHappy] = useState(true);
  const [count, setCount] = useState(0);
  function toggleIsHappy() {
    setIsHappy(!isHappy);
  }
  function increment() {
    setCount(count + 1);
  }
  const message = isHappy ? "😊" : "😢";
  return (
    <div>
      <h1 onClick={toggleIsHappy}>{message}</h1>
      <h1 onClick={increment}>{count}</h1>
    </div>
  );
}
