import styled from "styled-components";

export const Empty = styled.div`
  margin: 10px;
  width: 33%;
  height: 400px;
  background-color: rgb(255, 97, 0, 0.2);
  border: 1px solid rgb(255, 97, 0, 0.2);
  border-radius: 10px;
`;

export const RoomInfo = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
`;

export const RoomUsers = styled.div`
  height: 192px;
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  overflow-y: auto;
`;
