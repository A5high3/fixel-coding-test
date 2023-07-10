import { useState } from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField, Button } from "@mui/material";

import HttpRequests from "../api/HttpRequests";

export default function TodoAddModal(props: {
  isShowAddModal: boolean;
  showAddModal: (flag: boolean) => void;
  requestId: number;
  fetchTodo: () => Promise<void>
}) {
  const [taskTitle, changeTaskTitle] = useState("");

  const registration = async () => {
    await new HttpRequests().registTodo(props.requestId, taskTitle);
    await props.fetchTodo();
    props.showAddModal(!props.isShowAddModal);
  };
  return (
    <Dialog
      open={props.isShowAddModal}
      onClose={() => props.showAddModal(false)}
    >
      <DialogTitle>新規のタスクを追加する</DialogTitle>
      <DialogContent>
        <DialogContentText>タスク内容を入力してください</DialogContentText>
        <TextField
          autoFocus
          type=""
          fullWidth
          variant="standard"
          value={taskTitle}
          onChange={(v) => changeTaskTitle(v.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.showAddModal(!props.isShowAddModal)}>
          キャンセル
        </Button>
        <Button onClick={() => registration()}>タスクを登録する</Button>
      </DialogActions>
    </Dialog>
  );
}
