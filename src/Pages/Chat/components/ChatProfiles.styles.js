import styled from "styled-components";

export const ChatProfiles = styled.div`
  position: relative;

  .leftBtn {
    position: absolute;
    z-index: 2;
    top: 13vh;
    left: -20px;
    background-color: white;
    color: ${props => props.theme.style.lightTomato};
    border-radius: 50%;
  }

  .rightBtn {
    position: absolute;
    z-index: 2;
    top: 13vh;
    right: -20px;
    background-color: white;
    color: ${props => props.theme.style.lightTomato};
    border-radius: 50%;
  }
`;

export const CarouselContainer = styled.div`
  ${props => props.theme.variables.wh("90vw", "30vh")};
  overflow: hidden;
`;

export const Profiles = styled.div`
  ${props => props.theme.variables.flex("", "", "")};
  /* transform: translate(${props => props.changePx}vw); */
  gap: 19px;
  transition: transform 1s;
`;

export const Profile = styled.div`
  ${props => props.theme.variables.wh("20vw", "30vh")};
  ${props => props.theme.variables.flex("column", "space-between", "center")};
  ${props => props.theme.style.radius};
  background-color: ${props => props.theme.style.lightTomato};

  img {
    ${props => props.theme.variables.wh("10vw", "20vh")};
    border-radius: 50%;
    margin-top: 20px;
  }

  div {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
    color: white;
  }
`;
