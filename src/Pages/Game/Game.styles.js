import styled from "styled-components";

export const Contailner = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: rgba(255, 97, 0, 0.4);
`;

export const GameBtn = styled.a`
  width: 45%;
  height: 700px;
  margin: 20px 0px 30px 0px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  font-size: 100px;
  text-align: center;
  line-height: 700px;
  color: black;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 97, 0, 0.4);
  }
`;
