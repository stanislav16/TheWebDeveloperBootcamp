export default function ListPicker({ items = [] }) {
  return (
    <div>
      <h3>Pick from the list:</h3>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
