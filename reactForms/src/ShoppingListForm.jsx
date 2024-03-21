import { useState } from "react";
import { useForm } from "react-hook-form";
export default function ShoppingListForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [item, setItem] = useState({ item: "", quantity: 0 });
  function handleChange(event) {
    setItem((prevItem) => {
      return { ...prevItem, [event.target.name]: event.target.value };
    });
  }
  function submit(event) {
    event.preventDefault();
    onSubmit(item);
    setItem({ item: "", quantity: 0 });
  }
  return (
    <div>
      <h1>ShoppingList</h1>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="item">Item:</label>
        <input
          {...register("item", { required: "Item is required" })}
          type="text"
          id="item"
          name="item"
        />
        {errors.item && <p>{errors.item.message}</p>}
        <br />
        <br />
        <label htmlFor="quantity">Quantity:</label>
        <input
          {...register("quantity", { required: "Quantity is required" })}
          type="number"
          id="quantity"
          name="quantity"
        />
        {errors.quantity && <p>{errors.quantity.message}</p>}
        <br />
        <br />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}
