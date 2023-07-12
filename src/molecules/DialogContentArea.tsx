import DialogContent from "@mui/material/DialogContent";

export default function DialogContentArea(props: {
  children: React.ReactNode;
}) {
  return <DialogContent>{props.children}</DialogContent>;
}
