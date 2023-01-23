import React, { useEffect, useState } from "react";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import * as P from "./ChatProfiles.styles";
import "./ChatProfiles.styles";

const ChatProfiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [px, setPx] = useState(0);

  const CARDWITH = 16;
  const overFlowValue =
    profiles.length < 6 ? 0 : (profiles.length - 6) * CARDWITH;

  const handleClickLeft = () => {
    if (px < 0) {
      setPx(prev => prev + CARDWITH);
    }
  };

  const handleClickRight = () => {
    if (px >= -overFlowValue) {
      setPx(prev => prev - CARDWITH);
    }
  };

  useEffect(() => {
    fetch("/Data/profiles.json")
      .then(res => res.json())
      .then(result => setProfiles(result));
  }, []);

  return (
    <P.ChatProfiles>
      {profiles.length > 9 ? (
        <>
          <BiChevronLeftCircle
            size="38px"
            className="leftBtn"
            onClick={handleClickLeft}
          />
          <BiChevronRightCircle
            size="38px"
            className="rightBtn"
            onClick={handleClickRight}
          />
        </>
      ) : null}
      <P.CarouselContainer>
        <P.Profiles style={{ transform: `translate(${px}vw)` }}>
          {profiles.map(({ id, img_url, name }) => (
            <P.Profile key={id}>
              <img src={img_url} alt="프로필" />
              <div>{name}</div>
            </P.Profile>
          ))}
        </P.Profiles>
      </P.CarouselContainer>
    </P.ChatProfiles>
  );
};

export default ChatProfiles;
