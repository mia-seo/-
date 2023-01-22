import React from "react";
import * as T from "./ChatTitle.styles";

const ChatTitle = () => {
  return (
    <T.Title>
      <label for="title">방이름 : </label>
      <T.TitleInput id="title" disabled={true} />
      <T.Btn>수정</T.Btn>
      <T.Toggle>주문대기</T.Toggle>
    </T.Title>
  );
};

export default ChatTitle;
