import React from "react";
import EmptyCard from "./Components/EmptyCard";
import styled from "styled-components";

function Party() {
  const CardFlex = styled.div`
    dispaly: flex;
    justify-contents: center;
    align-item: cemter;
  `;
  return (
    <div>
      <EmptyCard />
      <EmptyCard />
      <EmptyCard />
    </div>
  );
}

export default Party;
