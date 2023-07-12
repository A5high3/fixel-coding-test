import { Button } from "@mui/material";

export default function FixelBtn(props: {
  btnText: string;
  onClickFunction: () => void;
}) {
  return (
    <Button onClick={() => props.onClickFunction()}>
      {props.btnText}
    </Button>
  );
}
