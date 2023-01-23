import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-bottom: 30px;
`;

export const mapContainer = styled.div`
  width: 60%;
  margin-top: 50px;
  border-radius: 10px;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  height: 100%;
  margin-top: 30px;
`;

export const TitleBox = styled.div`
  width: 100%;
  height: 20%;
  padding: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  font-size: 30px;
`;

export const ItemDetailBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 80%;
  padding: 20px;
`;

export const DetailImg = styled.img`
  width: 300px;
  height: 300px;
`;

export const DetailTextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 300px;
  margin-top: 30px;
`;

export const DetailText = styled.p`
  font-size: 25px;
  margin-bottom: 10px;
`;
