import React, { useEffect, useState } from "react";
import Location from "./Location";
import * as M from "./Map.styles";
import "../../styles/reset.css";

const Map = () => {
  const [items, setItems] = useState([]);
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  const addMapPoint = (lat, lon) => {
    setLatitude(lat);
    setLongitude(lon);
  };

  useEffect(() => {
    fetch("/data/itemdata.json")
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  return (
    <M.Container>
      <M.Fiter>
        <M.SearchBox>
          <input />
          <button>검색</button>
        </M.SearchBox>
        <select>
          <option>중식</option>
          <option>한식</option>
          <option>양식</option>
          <option>중식</option>
        </select>
      </M.Fiter>
      <M.ContainerBox>
        <M.Inner>
          <Location latitude={latitude} longitude={longitude} />
        </M.Inner>
        <M.List>
          {items.map((i, index) => {
            return (
              <M.Lists
                key={index}
                data-latitude={i.latitude}
                onClick={() => addMapPoint(i.latitude, i.longitude)}
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
          })}
        </M.List>
      </M.ContainerBox>
    </M.Container>
  );
};

export default Map;
