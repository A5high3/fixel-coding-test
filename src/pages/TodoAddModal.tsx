import { useState } from "react";

import DialogArea from "../organisms/Dialog";
import DialogBtnArea from "../molecules/DialogBtnArea";
import DialogContentArea from "../molecules/DialogContentArea";
import DialogTitle from "../atoms/dialog/Title";
import DialogGuideText from "../atoms/dialog/GuideText";
import TextInputComponent from "../atoms/TextArea";

import HttpRequests from "../api/HttpRequests";

export default function TodoAddModal(props: {
  isShowAddModal: boolean;
  showAddModal: (flag: boolean) => void;
  requestId: number;
  fetchTodo: () => Promise<void>;
}) {
  const [taskTitle, changeTaskTitle] = useState("");

  const changeTaskTitleWrapper = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeTaskTitle(e.target.value);
  };

  const registration = async () => {
    await new HttpRequests().registTodo(props.requestId, taskTitle);
    await props.fetchTodo();
    props.showAddModal(!props.isShowAddModal);
  };
  return (
    <DialogArea
      isShowModal={props.isShowAddModal}
      handleModal={() => props.showAddModal(false)}
    >
      <DialogTitle titleText="新規のタスクを追加する" />
      <DialogContentArea>
        <DialogGuideText titleText="タスク内容を入力してください" />
        <TextInputComponent
          textValue={taskTitle}
          onChangeFunction={(v) => changeTaskTitleWrapper(v)}
        />
      </DialogContentArea>
      <DialogBtnArea
        btnTextAsAccept="タスクを登録する"
        btnTextAsCancel="キャンセル"
        onClickFunctionAsAccept={() => registration()}
        onClickFunctionAsCancel={() => props.showAddModal(!props.showAddModal)}
      />
    </DialogArea>
  );
}
