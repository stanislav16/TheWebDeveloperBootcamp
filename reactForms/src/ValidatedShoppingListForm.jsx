import { useState } from "react";
export default function ValidatedShoppingListForm({ onSubmit }) {
  const [item, setItem] = useState({ item: "", quantity: 0 });
  const [errors, setErrors] = useState(false);
  function validate(item) {
    if (item.length === 0) {
      setErrors(false);
    } else {
      setErrors(true);
    }
  }
  function handleChange(event) {
    if (event.target.name === "item") validate(event.target.value);
    setItem((prevItem) => {
      return { ...prevItem, [event.target.name]: event.target.value };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(item);
    setItem({ item: "", quantity: 0 });
  }
  return (
    <div>
      <h1>Shopping List</h1>
      <form onSubmit={handleSubmit}>
        {!errors && <p style={{ color: "red" }}>Please fill out all fields</p>}
        <label htmlFor="item">Item:</label>
        <input
          type="text"
          id="item"
          name="item"
          onChange={handleChange}
          value={item.item}
        />
        <br />
        <br />
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          onChange={handleChange}
          value={item.quantity}
        />
        <br />
        <br />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}
