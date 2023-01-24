import styled from "styled-components";

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 408px;
  /* ${props => props.theme.variables.flex("column", "center", "center")}
  position: absolute;
  margin: 10px;
  min-width: 31.8%;
  background-color: white;
  border: 1px solid tomato;
  border-radius: 10px; */
`;

export const RoomInfo = styled.div`
  ${props => props.theme.variables.flex("", "", "center")}
  margin: 10px;
  padding: 10px;
  border: 1px solid tomato;
  color: tomato;

  img {
    ${props => props.theme.variables.wh("40px", "40px")}
    border: none;
    border-radius: 100%;
    margin-right: 10px;
  }
`;

export const RoomUsers = styled.div`
  height: 180px;
  margin: 10px;
  padding: 10px;
  border: 1px solid tomato;
  overflow-y: auto;
  color: tomato;
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
  height: 120px;
  border: 5px solid ${props => props.theme.style.lightGray};
  border-radius: 100%;
`;

export const CreateCardLayout = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 408px;
  /* ${props => props.theme.variables.flex("column", "center", "center")}
  position: absolute;
  margin: 10px;
  min-width: 31.8%;
  background-color: white;
  border: 1px solid tomato;
  border-radius: 10px; */
`;
