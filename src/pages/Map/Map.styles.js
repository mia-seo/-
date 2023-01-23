import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 97, 0, 0.2);
`;
export const Fiter = styled.ul`
  display: flex;
  justify-content: center;
  width: 1300px;
  margin-bottom: 10px;

  div {
    height: 50px;
    border-radius: 10px;
    text-align: center;
  }
`;

export const categoryButton = styled.button`
  width: 80px;
  height: 40px;
  background-color: rgba(255, 97, 0, 0.2);
  margin: 0px 10px 0px 10px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const ContainerBox = styled.div`
  display: flex;
`;

export const Inner = styled.div`
  width: 600px;
  height: 800px;
  margin-right: 100px;
  overflow: hidden;
  border-radius: 10px;
`;

export const List = styled.ul`
  width: 600px;
  height: 800px;
  overflow: scroll;
  border-radius: 10px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Lists = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 300px;
  background-color: ${props => (props.primary ? "tomato" : "white")};
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  &:hover {
    cursor: pointer;
    background-color: rgba(255, 97, 0, 0.3);
  }
`;

export const ItemImg = styled.img`
  width: 200px;
  height: 200px;
  margin-left: 30px;
`;

export const ItemDec = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 250px;
  height: 200px;
`;

export const ItmeInfo = styled.p`
  margin-left: 10px;
  margin-bottom: 10px;
  font-size: ${props => (props.primary ? "20px" : "16px")};
`;
