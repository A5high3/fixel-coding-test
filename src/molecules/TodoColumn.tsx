import { Box, Chip } from "@mui/material";
import TodoMenu from "./TodoMenu"

type ToDoObject = {
  id: number;
  title: string;
  state: "NOTYET" | "DOING" | "COMPLETE";
};

export default function TodoColumn(props: { todo: ToDoObject }) {

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        maxWidth: 400,
        padding: 2,
        border: "1px solid #bbb",
        justifyContent: "start",
        alignItems: "center",
        flexDirection: "column",
      }}
      style={{marginBottom: 15}}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          flexDirection: "row",
          width: "100%",
          height: "80%",
        }}
      >
        {props.todo.state === "NOTYET" && <Chip label="未着手" color="info" />}
        {props.todo.state === "DOING" && (
          <Chip label="実行中" color="warning" />
        )}
        {props.todo.state === "COMPLETE" && (
          <Chip label="完了" color="success" />
        )}
        <Box style={{ paddingLeft: 10, fontSize: 24 }}>{props.todo.title}</Box>
      </Box>
      <TodoMenu state={props.todo.state} />
    </Box>
  );
}
