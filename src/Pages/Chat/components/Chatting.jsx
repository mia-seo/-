import React from "react";
import { useEffect, useState } from "react";
// import { io } from "socket.io-client";
import * as C from "./Chatting.styles";

// const socket = io.connect("http://localhost:3000");

const Chatting = () => {
  const [user, setUser] = useState([]);
  const [inputValue, setInputValue] = useState([]);
  const [chatList, setChatList] = useState([]);

  const handleChangeInput = e => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    fetch("/Data/profiles.json")
      .then(res => res.json())
      .then(res => setUser(res[0]));
  }, []);

  // const [params, setParams] = useState([
  //   {
  //     user_name: "",
  //     img: "",
  //     msg: "",
  //   },
  // ]);

  const handleSubmitInput = e => {
    e.preventDefault();
    setChatList([...chatList, inputValue]);
    // socket.emit("chatting", () => params);
    setInputValue("");
  };

  return (
    <C.Chatting>
      <C.ChatContainer>
        {chatList.map((li, index) => (
          <C.ChatList key={index}>
            <img src={user.img_url} alt="프로필" />
            <C.Chat>
              <C.ChatHeader>
                <C.Bold>{user.name}</C.Bold>
                <C.Small>시간시간</C.Small>
              </C.ChatHeader>
              <C.ChatContents>{li}</C.ChatContents>
            </C.Chat>
          </C.ChatList>
        ))}
      </C.ChatContainer>
      <C.TextBox onSubmit={handleSubmitInput}>
        <input type="text" value={inputValue} onChange={handleChangeInput} />
        <button>입력</button>
      </C.TextBox>
    </C.Chatting>
  );
};

export default Chatting;
