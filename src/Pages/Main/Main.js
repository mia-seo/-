import React, { useState } from "react";
import styled from "styled-components";
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

  const Tab = styled.ul`
    display: flex;
  `;

  const CategoriTabLi = styled.li`
    margin: 10px;
    width: 100%;
    background-color: rgb(0, 0, 0, 0.1);
    border: 1px solid rgb(0, 0, 0, 0.1);
    border-radius: 10px;
    color: rgb(0, 0, 0, 0.4);
    text-align: center;
    padding: 20px;
    cursor: pointer;

    &:hover {
      background-color: rgb(255, 97, 0, 0.2);
      border: 1px solid white;
      border-radius: 10px;
      color: white;
    }
  `;

  const [categori, setCategori] = useState("파티원 구함");
  return (
    <CategoriTab>
      <Tab>
        {CATEGORI_BUTTON.map((tab, idx) => (
          <CategoriTabLi key={idx} onClick={() => setCategori(tab)}>
            {tab}
          </CategoriTabLi>
        ))}
      </Tab>
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
