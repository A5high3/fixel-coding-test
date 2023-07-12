import { Box } from "@mui/material";
import TodoColumn from "../molecules/TodoColumn";

type ToDoObject = {
  id: number;
  title: string;
  state: "NOTYET" | "DOING" | "COMPLETE";
};

export default function TabContents(props: {
  children?: ToDoObject[];
  chosenTabIndex: number;
  contentsTabIndex: number;
  fetchTodo: () => Promise<void>
}) {
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
      {props.chosenTabIndex === props.contentsTabIndex &&
        props.children?.map((v) => <TodoColumn todo={v} fetchTodo={props.fetchTodo}/>)}
    </Box>
  );
}
