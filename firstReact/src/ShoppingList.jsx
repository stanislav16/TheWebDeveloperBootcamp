import ShoppingListItem from "./ShoppingListItem.jsx";
export default function ShoppingList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <ShoppingListItem item={item} index={index} key={index} />
      ))}
    </ul>
  );
}
