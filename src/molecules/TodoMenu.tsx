import { Box, Button } from "@mui/material";
import { TaskAlt, ArrowRight, Draw, Delete } from "@mui/icons-material";
import { ToDoObject } from "../App";
import HttpRequests from "../api/HttpRequests";

export default function TodoMenu(props: {
  todo: ToDoObject,
  fetchTodo: () => Promise<void>
}) {
  async function changeStatoDoing() {
    const request = {id: props.todo.id, title: props.todo.title, state: "DOING"}
    await new HttpRequests().changeTodoState(request as ToDoObject)
    await props.fetchTodo();
  }

  return (
    <Box style={style.menuArea}>
      {props.todo.state === "NOTYET" && (
        <Button style={style.menuBtn} onClick={() => changeStatoDoing()}>
          <ArrowRight />
          <Box style={style.paddingAdjusment}>実行中にする</Box>
        </Button>
      )}

      <Button style={style.menuBtn}>
        <Draw />
        <Box style={style.paddingAdjusment}>編集する</Box>
      </Button>

      {props.todo.state !== "COMPLETE" && (
        <Button style={style.menuBtn}>
          <TaskAlt />
          完了にする
        </Button>
      )}

      <Button style={style.menuBtn}>
        <Delete />
        削除する
      </Button>
    </Box>
  );
}

const style = {
  menuArea: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "end",
    flexDirection: "row" as const,
    borderTop: "1px solid #bbb",
    width: "100%",
    marginTop: 20,
    paddingTop: 10,
  },
  menuBtn: {
    display: "flex",
    alignItems: "center",
    fontSize: 12,
    padding: 2,
    color: "#000",
  },
  paddingAdjusment: {
    top: 2,
  },
};
