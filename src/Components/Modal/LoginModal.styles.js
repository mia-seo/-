import styled from "styled-components";

export const LoginLogo = styled.div`
  margin: 30px;
  font-size: 30px;
  color: ${props => props.theme.style.tomato};
`;

export const GoogleLoginBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;
`;

export const DeleteLoginBtn = styled.div`
  position: absolute;
  right: 5%;
  top: 5%;

  button {
    font-size: 20px;
    font-weight: bold;
    border: none;
    background-color: white;
  }
`;
