import styled from "styled-components";

export const Review = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ReviewContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  background-color: white;
  padding: 15px;
`;

export const ReviwListBox = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: white;
  margin-top: 30px;
  padding: 15px;
`;

export const AddReview = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  height: 20%;
  margin-bottom: 10px;
  font-size: 30px;
`;

export const GPA = styled.button`
  width: 80px;
  height: 40px;
  margin-left: 20px;
  border: none;
  border-radius: 10px;
  background-color: ${props => (props.seleted ? "tomato" : "white")};
  cursor: pointer;
`;

export const ReviewInput = styled.input`
  width: 90%;
  height: 70%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  font-size: 20px;
`;
export const ReviewBtn = styled.button`
  width: 10%;
  height: 70%;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;
