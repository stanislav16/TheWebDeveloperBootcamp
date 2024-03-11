export default function Slots() {
  const randomNumbers = Array.from({ length: 3 }, () =>
    Math.floor(Math.random() * 3)
  );
  const allSame = new Set(randomNumbers).size === 1;
  const congrats = allSame ? <div>Congrats</div> : null;
  const color = allSame ? "green" : "red";

  const message = allSame ? (
    <div style={{ color: color }}>You win!!</div>
  ) : (
    <div style={{ color: color }}>You lose</div>
  );
  return (
    <div>
      {randomNumbers.map((num, index) => (
        <div key={index}>{num}</div>
      ))}
      {message}
      <div>{congrats}</div>
    </div>
  );
}
