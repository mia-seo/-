import React from "react";
import { useNavigate } from "react-router-dom";
import * as E from "./EmptyCard.styles";

function EmptyCard({
  room_id,
  room_name,
  room_order_status_id,
  user_id,
  map_categoris,
}) {
  const navigate = useNavigate();
  const goToChat = () => navigate("/chat");

  return (
    <E.Empty key={room_id} onClick={goToChat}>
      <E.RoomInfo>제목 : {room_name}</E.RoomInfo>
      <E.RoomInfo>인원수 :{user_id.length}명</E.RoomInfo>
      <E.RoomInfo>주문상태 : {room_order_status_id}</E.RoomInfo>
      <E.RoomInfo>카테고리 : {map_categoris}</E.RoomInfo>
      <E.RoomUsers>
        참가자 :
        {user_id.map(item => (
          <E.RoomInfo key={item.room_id}>
            <div>
              <img src={item.user_profile_img} alt="img" />
            </div>
            <div>{item.nickname}</div>
          </E.RoomInfo>
        ))}
      </E.RoomUsers>
    </E.Empty>
  );
}

export default EmptyCard;
