import React from "react";
import CreateRoomInfoModal from "../Modal/CreateRoomInfoModal";
import GoogleLogin from "./Components/GoogleLogin";
import * as N from "./Nav.styles";

function Nav() {
  return (
    <N.Nav>
      <N.Logo>오점모?</N.Logo>
      <N.Login>로그인</N.Login>
      <GoogleLogin />
    </N.Nav>
  );
}
export default Nav;
