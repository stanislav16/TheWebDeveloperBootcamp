import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function incrementByFive() {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div>
      <button onClick={increment}>Count</button>
      <button onClick={incrementByFive}>Count by 5</button>
      <h1>{count}</h1>
    </div>
  );
}
