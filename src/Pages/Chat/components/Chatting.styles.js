import styled from "styled-components";

export const ChatBox = styled.div`
  ${props => props.theme.variables.wh("90vw", "40vh")};
  ${props => props.theme.variables.flex("column", "", "")};
`;

export const Chat = styled.div`
  ${props => props.theme.variables.wh("90vw", "30vh")};
  background-color: white;
  display: flex;
  padding: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  img {
    ${props => props.theme.variables.wh("32px", "32px")};
    border-radius: 50%;
  }
`;

export const ChatContents = styled.div`
  ${props => props.theme.variables.flex("column", "", "")};
  padding: 0 10px;
`;

export const ChatHeader = styled.div`
  ${props => props.theme.variables.flex("", "", "flex-end")};
`;

export const ChatBody = styled.div`
  margin: 5px 0;
`;

export const Bold = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

export const Small = styled.span`
  font-size: 13px;
`;

export const TextBox = styled.form`
  ${props => props.theme.variables.wh("90vw", "8vh")};

  input {
    ${props => props.theme.variables.wh("80vw", "8vh")};
    background-color: ${props => props.theme.style.lightTomato};
    border: none;
    padding: 20px;
    border-bottom-left-radius: 10px;

    :focus {
      outline: none;
    }
  }

  button {
    ${props => props.theme.variables.wh("10vw", "8vh")};
    border: none;
    border-bottom-right-radius: 10px;
    font-size: 20px;
    font-weight: bold;
    color: ${props => props.theme.style.tomato};
  }
`;
