<<<<<<< HEAD:src/pages/Main/Main.js
import React, { useState } from "react";
import { styled } from "styled-components";
import Game from "../../Components/Nav/Mainchild/Game";
import Map from "../../Components/Nav/Mainchild/Map";
import Party from "../../Components/Nav/Mainchild/Party";

const Main = () => {
  const CategoriTab = styled.div`
    width: 90%;
    margin: 50px auto;
    font-size: 30px;
    text-align: center;
    background-color: white;
    overflow-x: hidden;
  `;

  const CategoriTabLi = styled.li` margin: 10px;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.1);
  border: 1px solid rgb(0, 0, 0, 0.1);
  border-radius: 10px;
  color: rgb(0, 0, 0, 0.4);
  text-align: center;
  padding: 20px;
  cursor: pointer;
  
  &:hover
    background-color: rgb(255, 91, 74, 0.6);
    border: 1px solid white;
    border-radius: 10px;
    color: white;`;

  const [categori, setCategori] = useState("파티원 구함");
  return (
    <CategoriTab>
      <ul>
        {CATEGORI_BUTTON.map((tab, idx) => (
          <li key={idx} onClick={() => setCategori(tab)}>
            {tab}
          </li>
        ))}
      </ul>
      <div>{MAIN_CHILD[categori]}</div>
    </CategoriTab>
  );
};

export default Main;

const CATEGORI_BUTTON = ["파티원 구함", "맛집 지도", "게 임"];

const MAIN_CHILD = {
  "파티원 구함": <Party />,
  "맛집 지도": <Map />,
  "게 임": <Game />,
};
=======
import React from "react";

const Main = () => {
  return <div />;
};

export default Main;
>>>>>>> main:src/Pages/Main/Main.js
