import React, { useEffect, useState } from "react";
import EmptyCard from "./Components/EmptyCard";
import CreateCard from "./Components/CreateCard";
import * as P from "./Party.styles";

function Party() {
  const [roomData, setRoomData] = useState([]);

  useEffect(() => {
    fetch("/data/roomdata.json")
      .then(res => res.json())
      .then(res => setRoomData(res));
  }, []);

  const cardWidth = 408;

  const [move, setMove] = useState(0);

  const moveRight = () => {
    if (move >= -(roomData.length * cardWidth) + cardWidth * 3) {
      setMove(move - cardWidth);
    }
  };

  const moveLeft = () => {
    if (move <= -cardWidth) {
      setMove(move + cardWidth);
    }
  };

  return (
    <P.CardFlex style={{ transform: `translateX(${move}px)` }}>
      <div>
        <button onClick={moveLeft}> 왼 </button>
        <button onClick={moveRight}> 오 </button>
      </div>
      <div
        style={{ display: "flex", position: "absolute", transition: "0.5s" }}
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
        <CreateCard />
      </div>
    </P.CardFlex>
  );
}

export default Party;
