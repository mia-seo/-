import styled from "styled-components";

export const Empty = styled.div`
  margin: 10px;
  min-width: 31.8%;
  background-color: rgb(255, 97, 0, 0.2);
  border: 1px solid rgb(255, 97, 0, 0.2);
  border-radius: 10px;
`;

export const RoomInfo = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid black;

  img {
    ${props => props.theme.variables.wh("40px", "40px")}
    border: none;
    border-radius: 100%;
  }
`;

export const RoomUsers = styled.div`
  height: 180px;
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  overflow-y: auto;
`;

export const CraeteCard = styled.button`
  border: none;
  background-color: rgb(255, 97, 0, 0);
  font-size: 100px;
  color: ${props => props.theme.style.lightGray};
`;

export const CraeteButton = styled.div`
  text-align: center;
  width: 120px;
  border: 5px solid ${props => props.theme.style.lightGray};
  border-radius: 100%;
`;

export const CreateCardLayout = styled.div`
  ${props => props.theme.variables.flex("", "center", "center")}
  margin: 10px;
  min-width: 31.8%;
  background-color: rgb(255, 97, 0, 0.2);
  border-radius: 10px;
  border: 1px solid rgb(255, 97, 0, 0.2);
`;
