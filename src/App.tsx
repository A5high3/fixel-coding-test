import { useState, useEffect } from "react";

import "./App.css";

import TabContents from "./organisms/TabContents";

import { Box } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import TodoAddModal from "./organisms/TodoAddModal";
import HttpRequests from "./api/HttpRequests";

export type ToDoObject = {
  id: number;
  title: string;
  state: "NOTYET" | "DOING" | "COMPLETE";
};

function App() {
  const [chosenTabIndex, choiseTab] = useState(1);
  const [isShowAddModal, showAddModal] = useState(false);
  const [todoList, setTodoList] = useState([] as ToDoObject[]);
  const [latestTodoId, setLatestTodoId] = useState(0);

  async function fetchTodoAsyncWrapper() {
    const todoList = await new HttpRequests().fetchAllTodo();
    setTodoList(todoList);
    await sortTodoObjectAsyncWrapper(todoList);
    return;
  }

  async function sortTodoObjectAsyncWrapper(fetchResult: ToDoObject[]) {
    fetchResult.sort((a, b) => b.id - a.id);
    setLatestTodoId(fetchResult[0].id);
    return;
  }

  useEffect(() => {
    fetchTodoAsyncWrapper();
  }, []);

  return (
    <div className="App">
      <TodoAddModal
        isShowAddModal={isShowAddModal}
        showAddModal={showAddModal}
        requestId={latestTodoId + 1}
        fetchTodo={fetchTodoAsyncWrapper}
      />
      <Box>
        <Tabs value={chosenTabIndex} centered>
          <Tab onClick={() => choiseTab(0)} label="全て"></Tab>
          <Tab onClick={() => choiseTab(1)} label="未着手"></Tab>
          <Tab onClick={() => choiseTab(2)} label="実行中"></Tab>
          <Tab onClick={() => choiseTab(3)} label="完了"></Tab>
        </Tabs>
      </Box>

      {todoList.length === 0 && <Box>表示するタスクがありません</Box>}

      {0 < todoList.length && (
        <>
          <TabContents
            chosenTabIndex={chosenTabIndex}
            contentsTabIndex={0}
            fetchTodo={fetchTodoAsyncWrapper}
          >
            {todoList as ToDoObject[]}
          </TabContents>
          <TabContents
            chosenTabIndex={chosenTabIndex}
            contentsTabIndex={1}
            fetchTodo={fetchTodoAsyncWrapper}
          >
            {todoList.filter((v) => v.state === "NOTYET") as ToDoObject[]}
          </TabContents>
          <TabContents
            chosenTabIndex={chosenTabIndex}
            contentsTabIndex={2}
            fetchTodo={fetchTodoAsyncWrapper}
          >
            {todoList.filter((v) => v.state === "DOING") as ToDoObject[]}
          </TabContents>
          <TabContents
            chosenTabIndex={chosenTabIndex}
            contentsTabIndex={3}
            fetchTodo={fetchTodoAsyncWrapper}
          >
            {todoList.filter((v) => v.state === "COMPLETE") as ToDoObject[]}
          </TabContents>
        </>
      )}

      <Box style={{ position: "relative" }}>
        <Fab color="primary" onClick={() => showAddModal(true)}>
          <AddIcon />
        </Fab>
      </Box>
    </div>
  );
}

export default App;
