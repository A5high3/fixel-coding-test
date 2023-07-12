import DialogActions from "@mui/material/DialogActions";
import FixelBtn from "../atoms/Button";

export default function DialogBtnArea(props: {
  btnTextAsAccept: string;
  btnTextAsCancel: string;
  onClickFunctionAsAccept: () => Promise<void>;
  onClickFunctionAsCancel: () => void;
}) {
  return (
    <DialogActions>
      <FixelBtn
        btnText={props.btnTextAsCancel}
        onClickFunction={() => props.onClickFunctionAsCancel()}
      />
      <FixelBtn
        btnText={props.btnTextAsAccept}
        onClickFunction={() => props.onClickFunctionAsAccept()}
      />
    </DialogActions>
  );
}
