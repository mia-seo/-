import React from "react";
import styled from "styled-components";

function EmptyCard() {
  const Empty = styled.div`
    margin: 10px;
    width: 30%;
    height: 400px;
    background-color: rgb(255, 97, 0, 0.2);
    border: 1px solid rgb(255, 97, 0, 0.2);
    border-radius: 10px;
  `;
  return (
    <Empty>
      <div>제목 : </div>
      <div>인원수 : </div>
      <div>
        카테고리 :
        <select>
          <option>중식</option>
          <option>일식</option>
        </select>
      </div>
      <div>참가자 : </div>
    </Empty>
  );
}

export default EmptyCard;
