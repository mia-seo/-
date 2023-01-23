import React from "react";
import { useState } from "react";
import ReviewList from "./ReviewList";
import * as R from "./Review.styles";

const AVG = [
  {
    content: "맛있음",
  },
  {
    content: "그냥그럼",
  },
  {
    content: "별로임",
  },
];

const Review = () => {
  const [review, setReview] = useState("");
  const [reviewList, setReviewList] = useState([]);
  const [avg, setAvg] = useState("맛있음");

  const handleInput = e => {
    setReview(e.target.value);
    if (e.key === "Enter") {
      review !== "" && setReviewList([...reviewList, review]);
      setReview("");
    }
    if (e.key === "Enter" && e.shiftKey) {
      return;
    }
  };

  const addReview = () => {
    review !== ""
      ? setReviewList([...reviewList, review])
      : alert("리뷰를 입력해주세요.");
    setReview("");
  };

  const setRGA = e => {
    setAvg(e.target.value);
  };

  return (
    <R.Review>
      <R.ReviewContainer>
        <R.AddReview>
          에 대한 리뷰쓰기
          {AVG.map((i, index) => {
            return (
              <R.GPA
                seleted={avg === i.content}
                value={i.content}
                onClick={setRGA}
                key={index}
              >
                {i.content}
              </R.GPA>
            );
          })}
        </R.AddReview>

        <R.ReviewInput
          value={review}
          onChange={handleInput}
          onKeyUp={handleInput}
          placeholder="리뷰를 작성해주세요."
        />
        <R.ReviewBtn onClick={addReview}>작성</R.ReviewBtn>
      </R.ReviewContainer>
      <R.ReviwListBox>
        {reviewList.map((review, index) => {
          return <ReviewList review={review} key={index} avg={avg} />;
        })}
      </R.ReviwListBox>
    </R.Review>
  );
};

export default Review;
