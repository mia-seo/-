import React from "react";
import * as C from "./Chat.styles";

const Chat = () => {
  return (
    <C.Container>
      <C.Title>
        <label for="title">방이름 : </label>
        <C.TitleInput id="title" disabled={true} />
        <C.Btn>수정</C.Btn>
        <C.Toggle>주문대기</C.Toggle>
      </C.Title>
    </C.Container>
  );
};

export default Chat;
