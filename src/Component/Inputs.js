import { TextField } from "@mui/material";
import React from "react";

export const Inputs = (props) => {
  return (
    <>
      <TextField
        variant="outlined"
        label={props.label}
        size="small"
        sx={{ width: 300 }}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        error={props.hasError}
        helperText={props.hasError ? props.errorText : ""}
      />
    </>
  );
};
