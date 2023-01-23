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

  return (
    <P.CardFlex>
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
    </P.CardFlex>
  );
}

export default Party;
