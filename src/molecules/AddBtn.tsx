import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function PlusIconBtn(props: {
  onClickFunction: (flag: boolean) => void;
}) {
  return (
    <Fab color="primary" onClick={() => props.onClickFunction(true)}>
      <AddIcon />
    </Fab>
  );
}
