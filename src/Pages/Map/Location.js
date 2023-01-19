import React, { useEffect } from "react";

const { kakao } = window;

const Location = ({ longitude, latitude }) => {
  let imageSrc =
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

  //처음 지도 그리기
  useEffect(() => {
    let mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(
          latitude ?? 37.506307228504966,
          longitude ?? 127.05371643215041
        ), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

    let map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
    let positions = [
      {
        title: "위코드",
        latlng: new kakao.maps.LatLng(37.506307228504966, 127.05371643215041),
      },
      {
        title: "옆가게",
        latlng: new kakao.maps.LatLng(latitude, longitude),
      },
    ];

    for (let i = 0; i < positions.length; i++) {
      // 마커 이미지의 이미지 크기 입니다
      let imageSize = new kakao.maps.Size(24, 35);

      // 마커 이미지를 생성합니다
      let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // 마커를 생성합니다
      let marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
      });
    }
  });

  return (
    <div
      style={{
        width: "100%",
        display: "inline-block",
      }}
    >
      <div id="map" style={{ width: "100%", height: "500px" }} />
    </div>
  );
};

export default Location;
