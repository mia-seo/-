import React from "react";
import GoogleLogin from "../Nav/Components/GoogleLogin";
import * as L from "./LoginModal.styles";
import * as M from "./CreateRoomInfoModal.styles";

function LoginModal({ fn }) {
  return (
    <M.ModalOutLine>
      <L.DeleteLoginBtn>
        <button onClick={fn}>x</button>
      </L.DeleteLoginBtn>
      <div>
        <L.LoginLogo>오점모</L.LoginLogo>
      </div>

      <L.GoogleLoginBtn>
        <GoogleLogin />
      </L.GoogleLoginBtn>
    </M.ModalOutLine>
  );
}
export default LoginModal;
