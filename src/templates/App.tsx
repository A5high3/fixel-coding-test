import { useState, useEffect } from "react";
import { Box } from "@mui/material";

import TodoAddModal from "../pages/TodoAddModal";
import TodoTab from "../organisms/TodoTab";
import PlusIconBtn from "../molecules/AddBtn";

import HttpRequests from "../api/HttpRequests";
import dummy from "../dummyData.json";
import "../App.css";

export type ToDoObject = {
  id: number;
  title: string;
  state: "NOTYET" | "DOING" | "COMPLETE";
};

function App() {
  const [chosenTabIndex, chooseTab] = useState(1);
  const [isShowAddModal, showAddModal] = useState(false);
  const [todoList, setTodoList] = useState([] as ToDoObject[]);
  const [latestTodoId, setLatestTodoId] = useState(0);

  async function fetchTodoAsyncWrapper() {
    // ダミーデータと切り替える際は32, 33行目を交互にコメントアウトいただきたい
    const todoList = await new HttpRequests().fetchAllTodo();
    // const todoList = dummy as ToDoObject[]
    setTodoList(todoList);
    if (0 < todoList.length) {
      await sortTodoObjectAsyncWrapper(todoList);
    }

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

      <TodoTab
        todoList={todoList}
        chosenTabIndex={chosenTabIndex}
        fetchAllTodo={() => fetchTodoAsyncWrapper()}
        chooseTab={chooseTab}
      />

      <Box style={{ position: "relative" }}>
        <PlusIconBtn onClickFunction={() => showAddModal(true)} />
      </Box>
    </div>
  );
}

export default App;
