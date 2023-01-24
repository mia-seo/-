import styled from "styled-components";

export const ModalOutLine = styled.div`
  ${props => props.theme.variables.wh("30vw", "35vh")}
  ${props => props.theme.style.radius};
  position: fixed;
  top: 30%;
  right: 38%;
  background-color: white;
  border: 1px solid ${props => props.theme.style.tomato};
  z-index: 1;
`;

export const ChoiceUserCount = styled.div`
  margin: 10px;
  text-align: end;
  color: ${props => props.theme.style.tomato};
  input {
    border: 1px solid ${props => props.theme.style.tomato};
    ${props => props.theme.style.radius};
    width: 10%;
  }
`;

export const UnderInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CreateRoomHead = styled.div`
  text-align: center;
  margin: 10px auto;
  font-size: 30px;
  color: ${props => props.theme.style.tomato};
`;

export const title = styled.div`
  text-align: center;
  font-size: 20px;
  margin: 20px 0;
  color: ${props => props.theme.style.tomato};

  input {
    border: 1px solid ${props => props.theme.style.tomato};
    ${props => props.theme.style.radius};
    width: 70%;
    height: 25px;
  }
`;

export const SelectCategori = styled.div`
  margin: 10px;
  color: ${props => props.theme.style.tomato};
  ${props => props.theme.variables.flex("row", "end", "center")}

  select {
    border: 1px solid ${props => props.theme.style.tomato};
    ${props => props.theme.style.radius};
  }
`;

export const CreateButtonList = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 30px;
`;

export const CreateButton = styled.button`
  ${props => props.theme.variables.wh("8vw", "60%")}
  ${props => props.theme.style.radius};
  background-color: ${props => props.theme.style.tomato};
  color: white;
  font-weight: bold;
  font-size: 18px;
  border: 1px solid ${props => props.theme.style.tomato};
`;

export const DeleteButton = styled(CreateButton)`
  background-color: white;
  color: ${props => props.theme.style.tomato};
`;
