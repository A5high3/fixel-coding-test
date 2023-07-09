import { Box } from "@mui/material";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import {
  TaskAlt,
  ArrowRight,
  DeleteForever,
  Autorenew,
} from "@mui/icons-material";

export default function TaskMenu(props: { isShow: boolean }) {
  return (
    <>
      {props.isShow && (
        <Box sx={{ position: "absolute", maxWidth: 250, left: 0 }}>
          <List>
            <ListItemButton>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText primary="タスクを実行中にする" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <TaskAlt />
              </ListItemIcon>
              <ListItemText primary="タスクを完了にする" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Autorenew />
              </ListItemIcon>
              <ListItemText primary="タスクを更新する" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <DeleteForever />
              </ListItemIcon>
              <ListItemText primary="タスクを削除する" />
            </ListItemButton>
          </List>
        </Box>
      )}
    </>
  );
}
