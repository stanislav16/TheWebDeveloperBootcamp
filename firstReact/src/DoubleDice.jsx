export default function DoubleDice({ sides = 6 }) {
  const num1 = Math.floor(Math.random() * sides) + 1;
  const num2 = Math.floor(Math.random() * sides) + 1;
  const isWinner = num1 === num2;
  const message = isWinner ? "Doubles!" : "Not doubles";
  const styles = {
    color: isWinner ? "green" : "red",
  };

  return (
    <div style={styles}>
      <h3>Roll the {sides}-sided dice twice!</h3>
      <p>
        {num1} = {num2}
      </p>
      <p>{message}</p>
    </div>
  );
}
