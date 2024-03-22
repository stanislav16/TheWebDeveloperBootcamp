import { useEffect, useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  useEffect(
    function myEffect() {
      console.log("This is a side effect");
    },
    [count]
  );
  function updateCount() {
    setCount(count + 1);
  }
  function updateText(event) {
    setText(event.target.value);
  }
  return (
    <>
      <h3>{count}</h3>
      <button onClick={updateCount}>+1</button>
      <br />
      <p>{text}</p>
      <input type="text" value={text} name="text" onChange={updateText} />
    </>
  );
}
