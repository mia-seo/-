import React, { useState } from "react";
import LoginModal from "../Modal/LoginModal";
import * as N from "./Nav.styles";

function Nav() {
  const [activeLoginModal, setActiveLogimModal] = useState(false);

  const handleLoginModal = () => {
    setActiveLogimModal(prev => !prev);
  };

  return (
    <N.Nav>
      <N.Logo>오점모?</N.Logo>
      <N.Login onClick={handleLoginModal}>로그인</N.Login>
      {activeLoginModal && <LoginModal fn={handleLoginModal} />}
    </N.Nav>
  );
}
export default Nav;
