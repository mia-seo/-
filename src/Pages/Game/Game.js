import React from "react";
import * as G from "./Game.styles";

function Game() {
  const GAMELIST = [
    {
      title: "사다리게임",
      link: "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EC%82%AC%EB%8B%A4%EB%A6%AC%EA%B2%8C%EC%9E%84&oquery=%EB%A3%B0%EB%A0%9B&tqi=h8CGelp0Jy0ssRx2NjVssssssed-113165",
    },
    {
      title: "룰렛게임",
      link: "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EB%A3%B0%EB%A0%9B",
    },
  ];

  return (
    <G.Contailner>
      {GAMELIST.map((i, index) => {
        return (
          <G.GameBtn key={index} href={i.link} target="_blank">
            {i.title}
          </G.GameBtn>
        );
      })}
    </G.Contailner>
  );
}

export default Game;
