import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as E from "./EmptyCard.styles";

function EmptyCard({
  room_name,
  room_order_status_id,
  user_id,
  map_categoris,
}) {
  const navigate = useNavigate();
  const goToNotYet = () => navigate("/notyet");
  return (
    <E.Empty>
      <E.RoomInfo>제목 : {room_name}</E.RoomInfo>
      <E.Banners>
        {room_order_status_id == "주문 완료" ? (
          <E.OrderSuccess>{room_order_status_id}</E.OrderSuccess>
        ) : (
          <E.OrderReady>{room_order_status_id}</E.OrderReady>
        )}
        <E.CategoryBanner>카테고리 : {map_categoris}</E.CategoryBanner>
      </E.Banners>
      <E.RoomUsers>
        참가자 : {user_id.length}명
        {user_id.map((item, idx) => (
          <E.UserProfile key={idx}>
            <E.UserInfo>
              <div>
                <img src={item.user_profile_img} alt="img" />
              </div>
              <div>{item.nickname}</div>
            </E.UserInfo>
            <E.Follow onClick={goToNotYet}>친구 추가 +</E.Follow>
          </E.UserProfile>
        ))}
      </E.RoomUsers>
    </E.Empty>
  );
}

export default EmptyCard;
