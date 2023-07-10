import { useState } from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField, Button } from "@mui/material";

import HttpRequests from "../api/HttpRequests";
import { ToDoObject } from "../App";

export default function TodoUpdateModal(props: {
  isShowAddModal: boolean;
  showAddModal: (flag: boolean) => void;
  todo: ToDoObject;
  fetchTodo: () => Promise<void>
}) {
  const [taskTitle, changeTaskTitle] = useState("");

  const updateTodo = async () => {
    const request = {
      id: props.todo.id,
      title: taskTitle,
      state: props.todo.state
    }
    await new HttpRequests().updateTodo(request);
    await props.fetchTodo();
    props.showAddModal(!props.isShowAddModal);
  };
  return (
    <Dialog
      open={props.isShowAddModal}
      onClose={() => props.showAddModal(false)}
    >
      <DialogTitle>タスクを更新する</DialogTitle>
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
        <Button onClick={() => updateTodo()}>タスクを更新する</Button>
      </DialogActions>
    </Dialog>
  );
}
