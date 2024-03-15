function handleClick() {
  console.log("clicked");
}

export default function Clicker() {
  return (
    <div>
      <h1>Clicker</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
