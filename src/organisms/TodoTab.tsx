import Box from "@mui/material/Box";
import TabHeader from "../molecules/Tab/TabHeader";
import TabContents from "./TabContents";

import { ToDoObject } from "../templates/App";
import { Dispatch, SetStateAction } from "react";

export default function TodoTab(props: {
  todoList: ToDoObject[];
  chosenTabIndex: number;
  fetchAllTodo: () => Promise<void>;
  chooseTab: Dispatch<SetStateAction<number>>;
}) {
  const { todoList, chosenTabIndex, fetchAllTodo, chooseTab } = props;
  return (
    <>
      <TabHeader chosenTabIndex={chosenTabIndex} chooseTab={chooseTab} />

      {todoList.length === 0 && <Box>表示するタスクがありません</Box>}

      {0 < todoList.length && (
        <>
          <TabContents
            chosenTabIndex={chosenTabIndex}
            contentsTabIndex={0}
            fetchTodo={fetchAllTodo}
          >
            {todoList as ToDoObject[]}
          </TabContents>
          <TabContents
            chosenTabIndex={chosenTabIndex}
            contentsTabIndex={1}
            fetchTodo={fetchAllTodo}
          >
            {todoList.filter((v) => v.state === "NOTYET") as ToDoObject[]}
          </TabContents>
          <TabContents
            chosenTabIndex={chosenTabIndex}
            contentsTabIndex={2}
            fetchTodo={fetchAllTodo}
          >
            {todoList.filter((v) => v.state === "DOING") as ToDoObject[]}
          </TabContents>
          <TabContents
            chosenTabIndex={chosenTabIndex}
            contentsTabIndex={3}
            fetchTodo={fetchAllTodo}
          >
            {todoList.filter((v) => v.state === "COMPLETE") as ToDoObject[]}
          </TabContents>
        </>
      )}
    </>
  );
}
