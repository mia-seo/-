import styled from "styled-components";

export const Empty = styled.div`
  ${props => props.theme.variables.flex("column", "", "center")}
  margin: 10px;
  min-width: 408px;
  min-height: 434px;
  background-color: white;
  border: 1px solid tomato;
  ${props => props.theme.style.radius};

  &:hover {
    position: relative;
    bottom: 5px;
  }
`;

export const RoomInfo = styled.div`
  ${props => props.theme.variables.flex("", "", "center")}
  width: 100%;
  padding: 20px 10px 15px 30px;
  border: 1px solid tomato;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: tomato;
  color: white;
  font-weight: bold;
`;

export const RoomUsers = styled.div`
  width: 90%;
  height: 280px;
  margin: 10px;
  padding: 10px 20px;
  font-weight: bold;
  border: 1px solid tomato;
  border-radius: 10px;
  overflow-y: auto;
  color: tomato;

  ::-webkit-scrollbar {
    width: 7px;
  }
  &:hover {
    ::-webkit-scrollbar {
      width: 7px;
      height: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: tomato;
      border: 1px solid white;
      border-radius: 10px;
    }
  }
`;

export const CraeteCard = styled.button`
  margin: auto 0;
  border: none;
  background-color: rgb(255, 97, 0, 0);
  font-size: 100px;
  color: ${props => props.theme.style.lightTomato};
`;

export const CraeteButton = styled.div`
  text-align: center;
  width: 120px;
  height: 120px;
  border: 5px solid ${props => props.theme.style.lightTomato};
  border-radius: 100%;
`;

export const CreateCardLayout = styled.div`
  ${props => props.theme.variables.flex("column", "", "center")}
  ${props => props.theme.variables.wh("408px", "434px")}
  margin: 10px;
  background-color: white;
  border: 1px solid ${props => props.theme.style.tomato};
  border-radius: 10px;

  &:hover {
    position: relative;
    bottom: 5px;
  }
`;

export const OrderSuccess = styled.div`
  margin: 10px;
  padding: 10px;
  color: white;
  background-color: ${props => props.theme.style.tomato};
  border: none;
  font-weight: 600;
  border-radius: 20px;
`;

export const OrderReady = styled.div`
  margin: 10px;
  padding: 10px;
  color: ${props => props.theme.style.tomato};
  background-color: white;
  font-weight: 600;
  border: 1px solid ${props => props.theme.style.tomato};
  border-radius: 20px;
`;

export const CategoryBanner = styled.div`
  margin: 10px;
  padding: 10px;
  font-weight: 600;
  color: white;
  background-color: ${props => props.theme.style.tomato};
  border: none;
  border-radius: 20px;
`;

export const Banners = styled.div`
  ${props => props.theme.variables.flex("row", "center", "center")}
`;

export const UserProfile = styled.div`
  ${props => props.theme.variables.flex("row", "space-between", "center")}
  font-size: 17px;
  margin: 10px 0;

  img {
    ${props => props.theme.variables.wh("45px", "45px")}
    border: none;
    border-radius: 100%;
    margin-right: 10px;
  }
`;

export const UserInfo = styled.div`
  ${props => props.theme.variables.flex("row", "start", "center")}
`;

export const Follow = styled.button`
  border: 1px solid tomato;
  color: white;
  background-color: tomato;
  border-radius: 15px;
  padding: 6px 5px 5px 5px;
  font-weight: 500;
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }
`;
