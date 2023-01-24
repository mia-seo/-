import React, { useState } from "react";
import styled from "styled-components";
import Map from "../Map/Map";
import Game from "../Game/Game";
import Party from "../Party/Party";
import * as M from "./Main.styles";

const Main = () => {
  const [categori, setCategori] = useState("파티원 구함");
  const [isTag, setIsTag] = useState(undefined);
  return (
    <div>
      <M.CategoriTab>
        <M.Tab>
          {CATEGORI_BUTTON.map((tab, idx) => (
            <M.CategoriTabLi key={idx} onClick={() => setCategori(tab)}>
              {tab}
            </M.CategoriTabLi>
          ))}
        </M.Tab>
      </M.CategoriTab>
      <M.MenuTab>
        <div>{MAIN_CHILD[categori]}</div>
      </M.MenuTab>
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
