import React from "react";
import styled from "styled-components";

function Nav() {
  const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    height: 100px;
    background-color: white;
    border-bottom: 1px solid black;
  `;

  const Logo = styled.div`
    margin: auto 30px;
    color: #ff6347;
    font-size: 32px;
    font-weight: bold;
  `;

  const Login = styled.button`
    margin: auto 30px;
    font-size: 26px;
    border: none;
    border-radius: 28px;
    color: white;
    background-color: #ff6347;
    padding: 10px;
    &:hover {
      cursor: pointer;
      background-color: white;
      color: #ff6347;
      border: 1px solid #ff6347;
    }
  `;

  return (
    <Nav>
      <Logo>오점모</Logo>
      <Login>로그인</Login>
    </Nav>
  );
}
export default Nav;
