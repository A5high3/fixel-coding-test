import { useState } from "react";

import { Box, Button } from "@mui/material";
import { TaskAlt, ArrowRight, Draw, Delete } from "@mui/icons-material";
import { ToDoObject } from "../App";

import HttpRequests from "../api/HttpRequests";
import TodoUpdateModal from "../pages/TodoUpdateModal";

export default function TodoMenu(props: {
  todo: ToDoObject;
  fetchTodo: () => Promise<void>;
}) {
  const [isShowAddModal, showAddModal] = useState(false);

  async function changeState(targetState: "DOING" | "COMPLETE"): Promise<void> {
    const request = {
      id: props.todo.id,
      title: props.todo.title,
      state: targetState,
    };
    await new HttpRequests().updateTodo(request as ToDoObject);
    await props.fetchTodo();
    return;
  }

  async function deleteTodo(): Promise<void> {
    await new HttpRequests().deleteTodo(props.todo);
    await props.fetchTodo();
    return;
  }

  return (
    <Box style={style.menuArea}>
      <TodoUpdateModal
        isShowAddModal={isShowAddModal}
        showAddModal={showAddModal}
        todo={props.todo}
        fetchTodo={props.fetchTodo}
      />
      {props.todo.state === "NOTYET" && (
        <Button style={style.menuBtn} onClick={() => changeState("DOING")}>
          <ArrowRight />
          <Box style={style.paddingAdjusment}>実行中にする</Box>
        </Button>
      )}

      <Button style={style.menuBtn} onClick={() => showAddModal(true)}>
        <Draw />
        <Box style={style.paddingAdjusment}>編集する</Box>
      </Button>

      {props.todo.state !== "COMPLETE" && (
        <Button style={style.menuBtn} onClick={() => changeState("COMPLETE")}>
          <TaskAlt />
          完了にする
        </Button>
      )}

      <Button style={style.menuBtn} onClick={() => deleteTodo()}>
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
