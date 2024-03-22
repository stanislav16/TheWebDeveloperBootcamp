import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
export default function ToDoItem({
  itemId,
  labelId,
  item,
  handleToggle,
  deleteItem,
}) {
  return (
    <ListItem
      key={itemId}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => deleteItem(item.id)}
        >
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton
        role={undefined}
        onClick={() => handleToggle(item.id)}
        dense
      >
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={item.checked}
            disableRipple
            inputProps={{ "aria-labelledby": labelId }}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={item.item} />
      </ListItemButton>
    </ListItem>
  );
}
