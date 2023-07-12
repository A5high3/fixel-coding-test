import { Tab } from "@mui/material";

export default function TabCulumn(props: {
    labelText: string,
    onClickFunction: () => void
}) {
  return <Tab onClick={() => props.onClickFunction()} label={props.labelText} />;
}
