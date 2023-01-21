import React from "react";
import * as E from "./EmptyCard.styles";

function EmptyCard({
  room_id,
  room_name,
  room_order_status_id,
  user_id,
  map_categoris,
}) {
  console.log(user_id);
  return (
    <E.Empty key={room_id}>
      <E.RoomInfo>제목 : {room_name}</E.RoomInfo>
      <E.RoomInfo>인원수 :{user_id.length}명</E.RoomInfo>
      <E.RoomInfo>주문상태 : {room_order_status_id}</E.RoomInfo>
      <E.RoomInfo>카테고리 : {map_categoris}</E.RoomInfo>
      <E.RoomUsers>
        참가자 :
        {user_id.map(item => (
          <E.RoomInfo>{item.nickname}</E.RoomInfo>
        ))}
        {user_id.map(item => (
          <E.RoomInfo>{item.nickname}</E.RoomInfo>
        ))}
      </E.RoomUsers>
    </E.Empty>
  );
}

export default EmptyCard;
