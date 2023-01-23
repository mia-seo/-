import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as M from "./Map.styles";

const Map = () => {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState("한식");
  const navigate = useNavigate();

  // 아이템의 좌표 설정해주고 props로 location에 넘겨줌

  // const addMapPoint = (lat, lon, name) => {
  //   setLatitude(lat);
  //   setLongitude(lon);
  //   setName(name);
  // };

  //mockdata불러오기
  useEffect(() => {
    fetch("/data/itemdata.json")
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  // 카테고리 이름 state
  const addCategory = cateName => {
    setCategory(cateName);
  };

  const toDetail = id => {
    navigate(`/detail`);
  };

  return (
    <M.Container>
      <M.Fiter>
        <div>
          {CATEGORYS.map((i, index) => {
            return (
              <M.categoryButton
                props={i.name}
                key={index}
                onClick={() => {
                  addCategory(i.name);
                }}
              >
                {i.name}
              </M.categoryButton>
            );
          })}
        </div>
      </M.Fiter>
      <M.ContainerBox>
        <M.List>
          {items.map((i, index) => {
            if (category === i.category) {
              return (
                <M.Lists
                  key={index}
                  data-latitude={i.latitude}
                  onClick={() => {
                    toDetail(i.id);
                  }}
                >
                  <M.ItemImg src="/images/cake.jpg" />
                  <M.ItemDec>
                    <M.ItmeInfo primary>상호명 : {i.name}</M.ItmeInfo>
                    <M.ItmeInfo>주소 : {i.address}</M.ItmeInfo>
                    <M.ItmeInfo>전화번호 : {i.Tel}</M.ItmeInfo>
                    <M.ItmeInfo>대표메뉴 : {i.smenu}</M.ItmeInfo>
                    <M.ItmeInfo>카테고리 : {i.category}</M.ItmeInfo>
                    <M.ItmeInfo>가격대 : 1만원 대</M.ItmeInfo>
                  </M.ItemDec>
                </M.Lists>
              );
            }
          })}
        </M.List>
      </M.ContainerBox>
    </M.Container>
  );
};

export default Map;

const CATEGORYS = [
  { name: "한식" },
  { name: "중식" },
  { name: "양식" },
  { name: "일식" },
  { name: "인스턴트" },
];
