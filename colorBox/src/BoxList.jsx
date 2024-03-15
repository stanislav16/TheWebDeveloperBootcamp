import ColorBox from "./ColorBox";
import "./BoxList.css";
export default function BoxList() {
  return (
    <div className="boxList">
      {Array.from({ length: 25 }).map((_, index) => (
        <ColorBox key={index} />
      ))}
    </div>
  );
}
