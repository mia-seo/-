import styled from "styled-components";

export const MenuTab = styled.div`
  width: 90%;
  margin: 50px auto;
  background-color: white;
  overflow-x: hidden;
`;

export const CategoriTab = styled(MenuTab)`
  font-size: 30px;
`;

export const Tab = styled.ul`
  display: flex;
`;

export const CategoriTabLi = styled.li`
  margin: 10px;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.1);
  border: 1px solid rgb(0, 0, 0, 0.1);
  border-radius: 10px;
  color: rgb(0, 0, 0, 0.4);
  text-align: center;
  padding: 20px;
  cursor: pointer;

  &:hover {
    background-color: rgb(255, 97, 0, 0.2);
    border: 1px solid white;
    border-radius: 10px;
    color: white;
  }
`;
