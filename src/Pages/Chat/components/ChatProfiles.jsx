import React, { useEffect, useState } from "react";
import * as P from "./ChatProfiles.styles";
import "./ChatProfiles.styles";

const ChatProfiles = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch("/Data/profiles.json")
      .then(res => res.json())
      .then(result => setProfiles(result));
  }, []);

  return (
    <P.Profiles>
      {profiles.map(({ id, img_url, name }) => (
        <P.Profile key={id}>
          <img src={img_url} alt="프로필" />
          <div>{name}</div>
        </P.Profile>
      ))}
    </P.Profiles>
  );
};

export default ChatProfiles;
