import React, { useState } from "react";
import styled from "styled-components";
import Game from "../Game/Game";
import Map from "../Map/Map";
import Party from "../Party/Party";

const MenuTab = styled.div`
  width: 90%;
  margin: 50px auto;
  background-color: white;
  overflow-x: hidden;
`;
const Main = () => {
  const CategoriTab = styled(MenuTab)`
    font-size: 30px;
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
    <div>
      <CategoriTab>
        <Tab>
          {CATEGORI_BUTTON.map((tab, idx) => (
            <CategoriTabLi key={idx} onClick={() => setCategori(tab)}>
              {tab}
            </CategoriTabLi>
          ))}
        </Tab>
      </CategoriTab>
      <MenuTab>
        <div>{MAIN_CHILD[categori]}</div>
      </MenuTab>
    </div>
  );
};

export default Main;

const CATEGORI_BUTTON = ["파티원 구함", "맛집 지도", "게 임"];

const MAIN_CHILD = {
  "파티원 구함": <Party />,
  "맛집 지도": <Map />,
  "게 임": <Game />,
};
