import styled from "styled-components";

export const ModalOutLine = styled.div`
  ${props => props.theme.variables.wh("30vw", "35vh")}
  ${props => props.theme.style.radius};
  position: fixed;
  top: 38vh;
  font-weight: bold;
  right: 34.4vw;
  background-color: white;
  border: 1px solid ${props => props.theme.style.tomato};
  z-index: 2;
`;

export const ChoiceUserCount = styled.div`
  margin: 10px;
  text-align: end;
  font-weight: bold;
  color: ${props => props.theme.style.tomato};
  input {
    font-weight: bold;
    margin: 0 2px;
    padding: 3px 3px 0 3px;
    border: 1px solid ${props => props.theme.style.tomato};
    border-radius: 7px;
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
  font-weight: bold;
  margin: 20px 0;
  color: ${props => props.theme.style.tomato};

  input {
    font-weight: bold;
    padding: 2px 0 0 5px;
    border: 1px solid ${props => props.theme.style.tomato};
    border-radius: 5px;
    width: 70%;
    height: 25px;
  }
`;

export const SelectCategory = styled.div`
  margin: 10px;
  font-weight: bold;
  color: ${props => props.theme.style.tomato};
  ${props => props.theme.variables.flex("row", "end", "center")}

  select {
    margin: 0 2px;
    color: tomato;
    font-weight: bold;
    border: 1px solid ${props => props.theme.style.tomato};
    border-radius: 5px;
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
