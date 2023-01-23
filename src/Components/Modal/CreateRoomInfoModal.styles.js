import styled from "styled-components";

export const ModalOutLine = styled.div`
  ${props => props.theme.variables.wh("30vw", "30vh")}
  ${props => props.theme.style.radius};
  position: fixed;
  top: 30%;
  right: 38%;
  background-color: white;
  border: 1px solid black;
  z-index: 1;
`;

export const CreateRoomHead = styled.div`
  text-align: center;
  margin: 10px auto;
  font-size: 30px;
`;
export const title = styled.div`
  text-align: center;
  font-size: 20px;
  margin: 20px 0;

  input {
    width: 70%;
    height: 25px;
  }
`;

export const SelectCategori = styled.div`
  ${props => props.theme.variables.flex("row", "space-between", "center")}
  margin: 20px 10px;
`;

export const CreateButtonList = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const CreateButton = styled.button`
  width: 30%;
`;
