import { useState, useEffect } from "react";
import List from "@mui/material/List";
import ToDoForm from "./ToDoForm";
import { v4 as uuid } from "uuid";
import ToDoItem from "./ToDoItem";
import Box from "@mui/material/Box";
export default function ToDoList() {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("items");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  function handleToggle(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function deleteItem(id) {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  }

  function submitForm(item) {
    setItems([...items, { ...item, checked: false }]);
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        m: 10,
        // justifyContent: "center",
        height: "100vh",
      }}
    >
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {items.map((item) => {
          const labelId = `checkbox-list-label-${item.id}`;

          return (
            <ToDoItem
              key={item.id}
              itemId={item.id}
              labelId={labelId}
              item={item}
              handleToggle={handleToggle}
              deleteItem={deleteItem}
            />
          );
        })}
      </List>
      <ToDoForm submitForm={submitForm} />
    </Box>
  );
}
