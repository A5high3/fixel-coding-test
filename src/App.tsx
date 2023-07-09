import { useState, ReactNode } from "react";

import "./App.css";

import { Box } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

function TabContents(props: {
  children?: ReactNode;
  chosenTabIndex: number;
  contentsTabIndex: number;
}) {
  return (
    <Box>
      {props.chosenTabIndex === props.contentsTabIndex && (
        <Box>{props.children}</Box>
      )}
    </Box>
  );
}

function App() {
  const [chosenTabIndex, choiseTab] = useState(1);
  return (
    <div className="App">
      <Box>
        <Tabs value={chosenTabIndex} centered>
          <Tab onClick={() => choiseTab(0)} label="ALL"></Tab>
          <Tab onClick={() => choiseTab(1)} label="NOT YET"></Tab>
          <Tab onClick={() => choiseTab(2)} label="DOING"></Tab>
          <Tab onClick={() => choiseTab(3)} label="COMPLETE"></Tab>
        </Tabs>
      </Box>
      <TabContents chosenTabIndex={chosenTabIndex} contentsTabIndex={0}>
        全てのタスク
      </TabContents>
      <TabContents chosenTabIndex={chosenTabIndex} contentsTabIndex={1}>
        未着手のタスク
      </TabContents>
      <TabContents chosenTabIndex={chosenTabIndex} contentsTabIndex={2}>
        実行中のタスク
      </TabContents>
      <TabContents chosenTabIndex={chosenTabIndex} contentsTabIndex={3}>
        完了ののタスク
      </TabContents>
    </div>
  );
}

export default App;
