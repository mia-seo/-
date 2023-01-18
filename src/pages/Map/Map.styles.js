import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  border: 1px solid black;
`;
export const Fiter = styled.ul`
  display: flex;
  justify-content: end;
  width: 600px;
  height: 50px;
  margin-bottom: 10px;

  border-radius: 10px;

  input {
    width: 500px;
    border-radius: 10px;

    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  button {
    width: 60px;
    background-color: tomato;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-right: 40px;
  }
  select {
    width: 100px;
    border-radius: 10px;

    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export const ContainerBox = styled.div`
  display: flex;
`;
export const Inner = styled.div`
  width: 500px;
  height: 500px;
  margin-right: 50px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: yellow;
`;

export const List = styled.ul`
  width: 600px;
  height: 500px;
  overflow: scroll;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const Lists = styled.li`
  display: flex;

  justify-content: space-around;
  align-items: center;
  width: 600px;
  height: 300px;
  background-color: ${props => (props.primary ? "tomato" : "white")};
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const ItemImg = styled.img`
  width: 200px;
  height: 200px;
`;

export const ItemDec = styled.div`
  width: 250px;
  height: 200px;
  margin-top: 40px;
`;

export const ItmeInfo = styled.p`
  margin-bottom: 10px;
  font-size: ${props => (props.primary ? "30px" : "15px")};
`;
