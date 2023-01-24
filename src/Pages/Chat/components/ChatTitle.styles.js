import styled from "styled-components";

export const Title = styled.form`
  ${props => props.theme.variables.wh("90vw", "10vh")}
  ${props => props.theme.variables.flex(null, "space-between", "center")}
  margin-top: 20px;
  color: ${props => props.theme.style.tomato};
  font-size: 30px;
  font-weight: bolder;
`;

export const TitleInput = styled.input`
  ${props => props.theme.variables.wh("65vw", "70%")}
  ${props => props.theme.style.radius};
  padding: 20px;
  font-size: 20px;
  :focus {
    outline: none;
  }
  border: 2px solid ${props => props.theme.style.tomato};
`;

export const Btn = styled.button`
  ${props => props.theme.variables.wh("6vw", "60%")}
  ${props => props.theme.style.radius};
  background-color: white;
  color: ${props => props.theme.style.tomato};
  font-weight: bold;
  font-size: 18px;
  border: none;
`;

export const Toggle = styled(Btn)`
  color: ${props => (props.isComplited ? "white" : props.theme.style.tomato)};
  background-color: ${props =>
    props.isComplited ? props.theme.style.tomato : "white"};
`;

export const Exit = styled.button`
  ${props => props.theme.variables.wh("3vw", "60%")};
  background-color: white;
  color: ${props => props.theme.style.tomato};
  border: none;
  border-radius: 50%;
  font-size: 20px;
`;
