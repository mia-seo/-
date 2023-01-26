import React from "react";
import styled from "styled-components";

function NotYet() {
  return <NotReady>준비중입니다.</NotReady>;
}

export default NotYet;

const NotReady = styled.div`
  ${props => props.theme.variables.flex("row", "center", "center")}
  margin-top: 200px;
  text-align: center;
  font-size: 100px;
  color: tomato;
`;
