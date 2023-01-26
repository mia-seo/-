import styled from "styled-components";

export const Nav = styled.div`
  ${props => props.theme.variables.flex("", "space-between", "center")};
  height: 80px;
  text-align: center;
  background-color: white;
`;

export const Logo = styled.div`
  margin: auto 30px;
  color: ${props => props.theme.style.tomato};
  font-size: 32px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;

export const Login = styled.button`
  margin: auto 30px;
  padding: 8px 20px;
  color: white;
  background-color: ${props => props.theme.style.tomato};
  font-size: 20px;
  font-weight: bold;
  border: none;
  border-radius: 20px;

  &:hover {
    color: ${props => props.theme.style.tomato};
    background-color: white;
    border: 1px solid ${props => props.theme.style.tomato};
    cursor: pointer;
  }
`;

export const LoginUserInfo = styled.div`
  ${props => props.theme.variables.flex("row", "center", "center")}
  margin-right:40px;

  p {
    color: ${props => props.theme.style.tomato};
    font-size: 22px;
    font-weight: bold;
    margin-left: 10px;
  }

  img {
    ${props => props.theme.variables.wh("45px", "45px")}
    border-radius: 100%;
  }
`;
