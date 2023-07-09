import { useState } from "react";

import "./App.css";

import TabContents from "./organisms/TabContents";

import { Box } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import dummy from "./dummyData.json";
import TodoAddModal from "./organisms/TodoAddModal";

type ToDoObject = {
  id: number;
  title: string;
  state: "NOTYET" | "DOING" | "COMPLETE";
};

function App() {
  const [chosenTabIndex, choiseTab] = useState(1);
  const [isShowAddModal, showAddModal] = useState(false);
  return (
    <div className="App">
      <TodoAddModal
        isShowAddModal={isShowAddModal}
        showAddModal={showAddModal}
      />
      <Box>
        <Tabs value={chosenTabIndex} centered>
          <Tab onClick={() => choiseTab(0)} label="全て"></Tab>
          <Tab onClick={() => choiseTab(1)} label="未着手"></Tab>
          <Tab onClick={() => choiseTab(2)} label="実行中"></Tab>
          <Tab onClick={() => choiseTab(3)} label="完了"></Tab>
        </Tabs>
      </Box>
      <TabContents chosenTabIndex={chosenTabIndex} contentsTabIndex={0}>
        {dummy as ToDoObject[]}
      </TabContents>
      <TabContents chosenTabIndex={chosenTabIndex} contentsTabIndex={1}>
        {dummy.filter((v) => v.state === "NOTYET") as ToDoObject[]}
      </TabContents>
      <TabContents chosenTabIndex={chosenTabIndex} contentsTabIndex={2}>
        {dummy.filter((v) => v.state === "DOING") as ToDoObject[]}
      </TabContents>
      <TabContents chosenTabIndex={chosenTabIndex} contentsTabIndex={3}>
        {dummy.filter((v) => v.state === "COMPLETE") as ToDoObject[]}
      </TabContents>
      <Box style={{ position: "relative" }}>
        <Fab color="primary" onClick={() => showAddModal(true)}>
          <AddIcon />
        </Fab>
      </Box>
    </div>
  );
}

export default App;
