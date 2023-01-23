import React, { useEffect } from "react";

function GoogleLogin() {
  const handleCallbackResponse = response => {
    localStorage.setItem("Token", response.credential);
  };
  // console.log(response.credential);
  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id:
        "732239070979-06gam29m0q3onpqri4989ec1pgf10mip.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  useEffect(() => {
    fetch("http://10.58.52.124:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: localStorage.getItem("Token"),
      },
    });
  });
  console.log(localStorage.getItem("Token"));
  return <div id="signInDiv"></div>;
}
export default GoogleLogin;
