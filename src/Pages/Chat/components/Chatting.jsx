import React from "react";
import * as C from "./Chatting.styles";

const Chatting = () => {
  return (
    <C.ChatBox>
      <C.Chat>
        <img
          src="https://pbs.twimg.com/media/FjN1ebDaAAE8oA5?format=jpg&name=large"
          alt="프로필"
        />
        <C.ChatContents>
          <C.ChatHeader>
            <C.Bold>지연</C.Bold>
            <C.Small>시간시간</C.Small>
          </C.ChatHeader>
          <C.ChatBody>dilkhj</C.ChatBody>
        </C.ChatContents>
      </C.Chat>
      <C.TextBox>
        <input type="text" />
        <button>버튼</button>
      </C.TextBox>
    </C.ChatBox>
  );
};

export default Chatting;
