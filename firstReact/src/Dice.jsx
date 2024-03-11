export default function Dice({ sides = 6 }) {
  const roll = Math.floor(Math.random() * sides) + 1;
  return (
    <div>
      <h3>Roll the {sides}-sided dice!</h3>
      <p>{roll}</p>
    </div>
  );
}
