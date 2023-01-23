import styled from "styled-components";

export const ReviewListContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 300px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-top: 10px;
    font-size: 15px;
  }
`;

export const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

export const ReviewPeople = styled.div`
  width: 70%;
  height: 200px;
  margin-left: 30px;
  padding: 10px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;
export const RGA = styled.p`
  position: absolute;
  top: 10px;
  left: 270px;
`;
