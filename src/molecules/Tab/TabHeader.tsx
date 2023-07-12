import Tabs from "@mui/material/Tabs";
import TabCulumn from "../../atoms/Tab/TabColumn";
import { Dispatch, SetStateAction } from "react";

export default function TabHeader(props: {
  chosenTabIndex: number;
  chooseTab: Dispatch<SetStateAction<number>>;
}) {
  const { chosenTabIndex, chooseTab } = props;
  return (
    <Tabs value={chosenTabIndex} centered>
      <TabCulumn labelText="全て" onClickFunction={() => chooseTab(0)} />
      <TabCulumn labelText="未着手" onClickFunction={() => chooseTab(1)} />
      <TabCulumn labelText="実行中" onClickFunction={() => chooseTab(2)} />
      <TabCulumn labelText="完了" onClickFunction={() => chooseTab(3)} />
    </Tabs>
  );
}
