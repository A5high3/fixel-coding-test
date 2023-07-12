import DialogTitle from "@mui/material/DialogTitle";

export default function DialogTitleComponent(props: {
    titleText: string
}) {
  return <DialogTitle>{props.titleText}</DialogTitle>;
}
