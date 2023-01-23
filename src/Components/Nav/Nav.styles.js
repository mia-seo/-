import styled from "styled-components";

export const Nav = styled.div`
  ${props => props.theme.variables.flex("", "space-between", "center")};
  height: 100px;
  text-align: center;
  background-color: white;
`;

export const Logo = styled.div`
  margin: auto 30px;
  color: ${props => props.theme.style.tomato};
  font-size: 32px;
  font-weight: bold;
`;

export const Login = styled.button`
  margin: auto 30px;
  padding: 10px;
  color: white;
  background-color: ${props => props.theme.style.tomato};
  font-size: 26px;
  border: none;
  border-radius: 28px;

  &:hover {
    color: ${props => props.theme.style.tomato};
    background-color: white;
    border: 1px solid ${props => props.theme.style.tomato};
    cursor: pointer;
  }
`;
