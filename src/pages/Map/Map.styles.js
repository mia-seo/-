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

export const SearchBox = styled.div`
  display: flex;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-right: 50px;
`;

export const Fiter = styled.ul`
  display: flex;
  height: 50px;
  margin-bottom: 30px;

  input {
    width: 500px;
    border-radius: 10px;

    border: none;
    :focus {
      outline: none;
    }
  }
  button {
    width: 60px;
    background-color: tomato;
    border-radius: 10px;
    border: none;
    :hover {
      background-color: tomato;
      opacity: 0.8;
      cursor: pointer;
    }
  }
  select {
    width: 100px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export const ContainerBox = styled.div`
  display: flex;
`;

export const Inner = styled.div`
  width: 600px;
  height: 500px;
  margin-right: 100px;
  overflow: hidden;
  border-radius: 10px;
`;

export const List = styled.ul`
  width: 600px;
  height: 500px;
  overflow: scroll;
  /* border: 1px solid rgba(0, 0, 0, 0.1); */
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
  width: 250px;
  height: 200px;
  margin-top: 40px;
`;

export const ItmeInfo = styled.p`
  margin-left: 10px;
  margin-bottom: 10px;
  font-size: ${props => (props.primary ? "30px" : "16px")};
`;
