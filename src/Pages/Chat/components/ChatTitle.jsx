import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as T from "./ChatTitle.styles";

const ChatTitle = () => {
  const [isTrue, setIsTrue] = useState({
    modify: false,
    status: false,
  });

  const changeBoolean = e => {
    e.preventDefault();
    const id = e.target.id;
    setIsTrue({ ...isTrue, [id]: !isTrue[id] });
  };

  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/");
  };

  return (
    <T.Title>
      <label htmlFor="title">방이름 : </label>
      <T.TitleInput id="title" disabled={!isTrue.modify} />
      <T.Btn id="modify" onClick={changeBoolean}>
        {isTrue.modify ? "수정 완료" : "수정"}
      </T.Btn>
      <T.Toggle id="status" onClick={changeBoolean} isComplited={isTrue.status}>
        {isTrue.status ? "주문 완료" : "주문 대기"}
      </T.Toggle>
      <T.Exit onClick={goToMain}>X</T.Exit>
    </T.Title>
  );
};

export default ChatTitle;
