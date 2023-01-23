import React from "react";
import * as C from "./Chat.styles";
import ChatTitle from "./components/ChatTitle";
import ChatProfiles from "./components/ChatProfiles";
import Chatting from "./components/Chatting";

function Chat() {
  return (
    <C.Container>
      <ChatTitle />
      <ChatProfiles />
      <Chatting />
    </C.Container>
  );
}

export default Chat;
