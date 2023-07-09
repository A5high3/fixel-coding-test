import { useState } from "react";

import { Box } from "@mui/material";
import { TaskAlt, ArrowRight, Autorenew } from "@mui/icons-material";

type ToDoObject = {
  id: number;
  title: string;
  state: "NOTYET" | "DOING" | "COMPLETE";
};

export default function TodoColumn(props: { todo: ToDoObject }) {
  const [isShowTodoMenu, switchShowTodoMenu] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        minHeight: 100,
        maxWidth: 400,
        border: "1px solid #bbb",
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={() => switchShowTodoMenu(!isShowTodoMenu)}
    >
      {props.todo.state === "NOTYET" && <ArrowRight />}
      {props.todo.state === "DOING" && <Autorenew />}
      {props.todo.state === "COMPLETE" && <TaskAlt />}
      {props.todo.title}
    </Box>
  );
}
