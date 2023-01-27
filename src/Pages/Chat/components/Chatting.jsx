import React from "react";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import * as C from "./Chatting.styles";

const socket = io("http://10.58.52.214:3000");

socket.on("connect", msg => {
  console.log("connection server");
});

const Chatting = () => {
  const [user, setUser] = useState([]);
  const [inputValue, setInputValue] = useState([]);
  // const [chatList, setChatList] = useState([]);
  const [item, setItem] = useState({
    id: "",
    name: "",
    msg: "",
    time: "",
    img: "",
  });

  const handleChangeInput = e => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    fetch("/Data/profiles.json")
      .then(res => res.json())
      .then(res => setUser(res[0]));
  }, []);

  const handleSubmitInput = e => {
    e.preventDefault();
    // setChatList([...chatList, inputValue]);
    send();
    socket.on("message", data => {
      setItem(...item, {
        id: data.id,
        name: data.name,
        msg: data.msg,
        time: data.time,
        img: data.img,
      });
    });
    setInputValue("");
  };

  const send = () => {
    const param = {
      id: user.id,
      name: user.name,
      msg: inputValue,
      img: user.img_url,
    };
    socket.emit("message", param);
  };

  return (
    <C.Chatting>
      <C.ChatContainer>
        {item.length > 0
          ? item.map(({ id, name, msg, time, img }) => (
              <C.ChatList key={id}>
                <img src={img} alt="프로필" />
                <C.Chat>
                  <C.ChatHeader>
                    <C.Bold>{name}</C.Bold>
                    <C.Small>{time}</C.Small>
                  </C.ChatHeader>
                  <C.ChatContents>{msg}</C.ChatContents>
                </C.Chat>
              </C.ChatList>
            ))
          : null}
      </C.ChatContainer>
      <C.TextBox onSubmit={handleSubmitInput}>
        <input type="text" value={inputValue} onChange={handleChangeInput} />
        <button>입력</button>
      </C.TextBox>
    </C.Chatting>
  );
};

export default Chatting;
