import React, { useState, useEffect } from "react";
import Map from "../Map/Map";
import Game from "../Game/Game";
import Party from "../Party/Party";
import * as M from "./Main.styles";

const Main = () => {
  const [category, setCategory] = useState("파티원 구함");
  const [btnType, setbtnType] = useState("party");

  const handleChangeBtnColor = type => {
    setbtnType(type);
  };

  return (
    <div>
      <M.CategoryTab>
        <M.Tab>
          {CATEGORY_BUTTON.map((tab, idx) => (
            <M.CategoryTabLi
              key={idx}
              className={`${btnType === tab.type ? "changedColor" : ""}`}
              onClick={() => {
                setCategory(tab.title);
                handleChangeBtnColor(tab.type);
              }}
            >
              {tab.title}
            </M.CategoryTabLi>
          ))}
        </M.Tab>
      </M.CategoryTab>
      <M.MenuTab>
        <div>{MAIN_CHILD[category]}</div>
      </M.MenuTab>
    </div>
  );
};

export default Main;

const CATEGORY_BUTTON = [
  { type: "party", title: "파티원 구함" },
  { type: "map", title: "맛집 지도" },
  { type: "game", title: "게 임" },
];

const MAIN_CHILD = {
  "파티원 구함": <Party />,
  "맛집 지도": <Map />,
  "게 임": <Game />,
};
