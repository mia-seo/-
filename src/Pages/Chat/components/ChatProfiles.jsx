import React, { useEffect, useState } from "react";
import * as P from "./ChatProfiles.styles";
import "./ChatProfiles.styles";

const ChatProfiles = () => {
  const [profiles, setProfiles] = useState();

  useEffect(() => {
    fetch("/Data/profiles.json")
      .then(res => res.json())
      .then(result => setProfiles(result));
  }, []);

  return (
    <P.Profiles>
      {profiles.map(profile => (
        <P.Profile key={profile.id}>
          <img src={profile.img_url} alt="프로필" />
          <div>{profile.name}</div>
        </P.Profile>
      ))}
    </P.Profiles>
  );
};

export default ChatProfiles;
