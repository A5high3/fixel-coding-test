import { useState } from "react";

import { Box } from "@mui/material";
import TaskMenu from "../molecules/TaskMenu";
import TodoColumn from "../molecules/ToDoColumn";

type ToDoObject = {
  id: number;
  title: string;
  state: "NOTYET" | "DOING" | "COMPLETE";
};

export default function TabContents(props: {
  children?: ToDoObject[];
  chosenTabIndex: number;
  contentsTabIndex: number;
}) {
  const [isShowTodoMenu, switchShowTodoMenu] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <TaskMenu isShow={isShowTodoMenu} />
      {props.chosenTabIndex === props.contentsTabIndex &&
        props.children?.map((v) => <TodoColumn todo={v} />)}
    </Box>
  );
}
