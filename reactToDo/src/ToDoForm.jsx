import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { v4 as uuid } from "uuid";
import { useForm, Controller } from "react-hook-form";
import InputAdornment from "@mui/material/InputAdornment";

export default function ToDoForm({ submitForm }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function formSubmit(data) {
    submitForm({ item: data.item, id: uuid() });
    reset();
  }

  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <Controller
        name="item"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            {...field}
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button variant="outlined" type="submit">
                    Submit
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </form>
  );
}
