export default function ShoppingListItem({ item }) {
  return (
    <li
      style={{
        textDecoration: item.completed ? "line-through" : "none",
        color: item.completed ? "red" : "grey",
      }}
    >
      {item.name} - {item.quantity}
    </li>
  );
}
