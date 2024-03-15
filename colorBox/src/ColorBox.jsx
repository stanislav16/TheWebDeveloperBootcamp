import React, { useState } from "react";
import "./ColorBox.css";
export default function ColorBox() {
  const firstColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const [color, setColor] = useState(firstColor);
  function randomColor() {
    setColor("#" + Math.floor(Math.random() * 16777215).toString(16));
  }
  return (
    <div
      onClick={randomColor}
      className="colorBox"
      style={{ backgroundColor: color }}
    ></div>
  );
}
