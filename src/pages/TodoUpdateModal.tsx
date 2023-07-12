import { useState } from "react";

import HttpRequests from "../api/HttpRequests";
import { ToDoObject } from "../App";

import DialogArea from "../organisms/Dialog";
import DialogBtnArea from "../molecules/DialogBtnArea";
import DialogContentArea from "../molecules/DialogContentArea";
import DialogGuideText from "../atoms/dialog/GuideText";
import TextInputComponent from "../atoms/TextArea";
import DialogTitle from "../atoms/dialog/Title";

export default function TodoUpdateModal(props: {
  isShowAddModal: boolean;
  showAddModal: (flag: boolean) => void;
  todo: ToDoObject;
  fetchTodo: () => Promise<void>;
}) {
  const [taskTitle, changeTaskTitle] = useState("");

  const changeTaskTitleWrapper = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeTaskTitle(e.target.value);
  };

  const updateTodo = async () => {
    const request = {
      id: props.todo.id,
      title: taskTitle,
      state: props.todo.state,
    };
    await new HttpRequests().updateTodo(request);
    await props.fetchTodo();
    props.showAddModal(!props.isShowAddModal);
  };
  return (
    <DialogArea
      isShowModal={props.isShowAddModal}
      handleModal={() => props.showAddModal(false)}
    >
      <DialogTitle titleText="タスクを更新する" />
      <DialogContentArea>
        <DialogGuideText titleText="タスク内容を入力してください" />
        <TextInputComponent
          textValue={taskTitle}
          onChangeFunction={(v) => changeTaskTitleWrapper(v)}
        />
      </DialogContentArea>

      <DialogBtnArea
        btnTextAsAccept="タスクを更新する"
        btnTextAsCancel="キャンセル"
        onClickFunctionAsAccept={() => updateTodo()}
        onClickFunctionAsCancel={() =>
          props.showAddModal(!props.isShowAddModal)
        }
      />
    </DialogArea>
  );
}
