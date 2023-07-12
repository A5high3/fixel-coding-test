import TextField from "@mui/material/TextField";
import { ChangeEvent } from "react";

export default function TextInputComponent(props: {
  textValue: string;
  onChangeFunction: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <TextField
      autoFocus
      type=""
      fullWidth
      variant="standard"
      value={props.textValue}
      onChange={(v) =>
        props.onChangeFunction(v as ChangeEvent<HTMLInputElement>)
      }
    />
  );
}
