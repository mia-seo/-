import React, { useEffect, useState } from "react";
import EmptyCard from "./Components/EmptyCard";
import CreateCard from "./Components/CreateCard";
import CreateRoomInfoModal from "../../Components/Modal/CreateRoomInfoModal";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import * as P from "./Party.styles";
//length limit 24
function Party() {
  const [roomData, setRoomData] = useState([]);
  const [screenWid, setScreenWid] = useState({ width: "" });
  const [isModalStatus, setIsModalStatus] = useState(false);
  const handleCreateModal = e => {
    e && setIsModalStatus(prev => !prev);
  };

  useEffect(() => {
    setScreenWid({
      ...screenWid,
      width: window.innerWidth || document.body.clientWidth,
    });
  }, []);

  useEffect(() => {
    fetch("/data/roomdata.json")
      .then(res => res.json())
      .then(res => setRoomData(res));
  }, []);

  const cardWidth = 428;

  const [move, setMove] = useState(0);

  const moveRight = () => {
    if (move >= -(roomData.length * cardWidth) + cardWidth * 3) {
      setMove(move - cardWidth * 3);
    }
  };

  const moveLeft = () => {
    if (move <= -cardWidth) {
      setMove(move + cardWidth * 3);
    }
  };

  return (
    <P.PartyLayout>
      <>
        <BiChevronLeftCircle
          size="50px"
          className="leftBtn"
          onClick={moveLeft}
        />
        <BiChevronRightCircle
          size="50px"
          className="rightBtn"
          onClick={moveRight}
        />
      </>

      <P.CardFlex style={{ transform: `translate(${move}px)` }}>
        <div
          style={{ display: "flex", position: "absolute", transition: "1s" }}
        >
          {roomData.map(
            ({
              room_id,
              room_name,
              room_order_status_id,
              user_id,
              map_categoris,
              user_profile_img,
            }) => (
              <EmptyCard
                key={room_id}
                room_name={room_name}
                room_order_status_id={room_order_status_id}
                user_id={user_id}
                map_categoris={map_categoris}
                user_profile_img={user_profile_img}
              />
            )
          )}
          <CreateCard fn={handleCreateModal} />
        </div>
      </P.CardFlex>
      {isModalStatus && <CreateRoomInfoModal fn={handleCreateModal} />}
    </P.PartyLayout>
  );
}

export default Party;
