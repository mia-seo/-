import React, { useState } from "react";
import Location from "./Location";
import * as D from "./DetailPage.styles";
import Review from "./Review";

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
            <D.DetailText>주소 :</D.DetailText>
            <D.DetailText>전화번호 :</D.DetailText>
            <D.DetailText>카테고리 :</D.DetailText>
            <D.DetailText>대표메뉴 : </D.DetailText>
            <D.DetailText>영업시간 : </D.DetailText>
            <D.DetailText>가격대 :</D.DetailText>
          </D.DetailTextBox>
        </D.ItemDetailBox>
      </D.ContentBox>
      <D.ContentBox>
        <D.TitleBox>리뷰</D.TitleBox>
        <D.ItemDetailBox>
          <Review />
        </D.ItemDetailBox>
      </D.ContentBox>
    </D.CategoryContainer>
  );
};

export default DetailPage;
