import React, { useState } from "react";
import Location from "./Location";
import * as D from "./DetailPage.styles";

const DetailPage = () => {
  const [latitude, setLatitude] = useState(37.506307228504966);
  const [longitude, setLongitude] = useState(127.05371643215041);
  const [name, setName] = useState("위코드");
  return (
    <D.CategoryContainer>
      <D.mapContainer>
        <Location latitude={latitude} longitude={longitude} name={name} />
      </D.mapContainer>
      <D.ContentBox>
        <D.TitleBox>음식점 명</D.TitleBox>
        <D.ItemDetailBox>
          <D.DetailImg src="/images/cake.jpg" />
          <D.DetailTextBox>
            <D.DetailText>
              주소 : 서울특별시 강남구 선릉로 86길 38 2층
            </D.DetailText>
            <D.DetailText>전화번호 : 02-6953-2235</D.DetailText>
            <D.DetailText>카테고리 : 한식</D.DetailText>
            <D.DetailText>대표메뉴 : 낙곱새 </D.DetailText>
            <D.DetailText>영업시간 : 10:00 ~ 22:00</D.DetailText>
            <D.DetailText>가격대 : 인당 1만원 대</D.DetailText>
          </D.DetailTextBox>
        </D.ItemDetailBox>
      </D.ContentBox>
      <D.ContentBox>
        <D.TitleBox>리뷰</D.TitleBox>
        <D.ItemDetailBox />
      </D.ContentBox>
    </D.CategoryContainer>
  );
};

export default DetailPage;
