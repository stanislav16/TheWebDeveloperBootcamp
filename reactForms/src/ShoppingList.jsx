import { useState } from "react";
import { v4 as uuid } from "uuid";
import ValidatedShoppingListForm from "./ValidatedShoppingListForm";
import ShoppingListForm from "./ShoppingListForm";
export default function ShoppingList() {
  const [items, setItems] = useState([]);
  function addItem(item) {
    setItems((prevItems) => {
      return [...prevItems, { ...item, id: uuid() }];
    });
  }
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.item} - {item.quantity}
          </li>
        ))}
      </ul>
      <ShoppingListForm onSubmit={addItem} />
    </>
  );
}
