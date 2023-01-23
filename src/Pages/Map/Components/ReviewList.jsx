import React from "react";
import * as RL from "./ReviewList.styles";

const ReviewList = ({ review, avg }) => {
  return (
    <RL.ReviewListContainer>
      <RL.RGA>{avg}</RL.RGA>
      <RL.UserInfo>
        <RL.Img src="/images/123.png" alt="유저이미지" />
        <p>아이디</p>
      </RL.UserInfo>

      <RL.ReviewPeople>{review}</RL.ReviewPeople>
    </RL.ReviewListContainer>
  );
};

export default ReviewList;
