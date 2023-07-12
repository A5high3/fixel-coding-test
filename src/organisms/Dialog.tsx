import Dialog from "@mui/material/Dialog";

export default function DialogArea(props: {
  children: React.ReactNode;
  isShowModal: boolean;
  handleModal: (flag: boolean) => void;
}) {
  return (
    <Dialog open={props.isShowModal} onClose={() => props.handleModal(false)}>
      {props.children}
    </Dialog>
  );
}
