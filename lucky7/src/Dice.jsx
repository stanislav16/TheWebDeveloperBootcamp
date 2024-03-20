import Die from "./Die";
import "./Dice.css";
export default function Dice({ dice }) {
  return (
    <section className="Dice">
      {dice.map((die, i) => (
        <Die key={i} value={die} />
      ))}
    </section>
  );
}
