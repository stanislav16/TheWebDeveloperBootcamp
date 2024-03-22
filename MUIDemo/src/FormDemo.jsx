import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function BasicTextFields() {
  const [value, setValue] = useState("");
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="FormDemo"
        variant="outlined"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <h2>{value}</h2>
    </Box>
  );
}
