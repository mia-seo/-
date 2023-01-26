import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginModal from "../Modal/LoginModal";
import * as N from "./Nav.styles";

function Nav() {
  const [activeLoginModal, setActiveLogimModal] = useState(false);
  const [userProfileInfo, setUserProfileInfo] = useState([]);
  const navigate = useNavigate();
  const gotoMain = () => navigate("/");

  const handleLoginModal = () => {
    setActiveLogimModal(prev => !prev);
  };

  useEffect(() => {
    fetch("/data/userProfile.json")
      .then(res => res.json())
      .then(res => setUserProfileInfo(res[0]));
  }, [localStorage.getItem("Token")]);

  const { userName, userProfileImg } = userProfileInfo;

  return (
    <N.Nav>
      <N.Logo onClick={gotoMain}>오점모?</N.Logo>
      {localStorage.getItem("Token") ? (
        <N.LoginUserInfo>
          <div>
            <img src={userProfileImg} alt="user Google profile Img" />
          </div>
          <p>{userName}님</p>
        </N.LoginUserInfo>
      ) : (
        <N.Login onClick={handleLoginModal}>로그인</N.Login>
      )}

      {activeLoginModal && <LoginModal fn={handleLoginModal} />}
    </N.Nav>
  );
}
export default Nav;
