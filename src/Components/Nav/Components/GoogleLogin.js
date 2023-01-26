import React, { useEffect } from "react";

function GoogleLogin({ fn }) {
  const handleCallbackResponse = response => {
    localStorage.setItem("Token", response.credential);
    return fn();
  };

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_KEY,
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
    })
      .then(data => data.json())
      .then(data => localStorage.setItem("accessToken", data.accessToken));
  }, []);

  return <div id="signInDiv"></div>;
}
export default GoogleLogin;
