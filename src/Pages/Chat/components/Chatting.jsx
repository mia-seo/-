import React from "react";
import { useEffect, useState } from "react";
import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
import * as C from "./Chatting.styles";

const socket = io();
console.log(socket);

const Chatting = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("/Data/profiles.json")
      .then(res => res.json())
      .then(res => setUser(res[0]));
  }, []);

  return (
    <C.ChatBox>
      <C.Chat>
        <li>
          <img src={user.img_url} alt="프로필" />
          <C.ChatContents>
            <C.ChatHeader>
              <C.Bold>{user.name}</C.Bold>
              <C.Small>시간시간</C.Small>
            </C.ChatHeader>
            <C.ChatBody>dilkhj</C.ChatBody>
          </C.ChatContents>
        </li>
      </C.Chat>
      <C.TextBox>
        <input type="text" />
        <button>입력</button>
      </C.TextBox>
    </C.ChatBox>
  );
};

export default Chatting;
