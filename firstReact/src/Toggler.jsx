import { useState } from "react";
export default function Toggler() {
  const [isHappy, setIsHappy] = useState(true);
  function toggleIsHappy() {
    setIsHappy(!isHappy);
  }
  const message = isHappy ? "😊" : "😢";
  return <h1 onClick={toggleIsHappy}>{message}</h1>;
}
