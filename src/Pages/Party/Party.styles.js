import styled from "styled-components";

export const CardFlex = styled.div`
  position: relative;
  left: 0;
  width: 1000vw;
  height: 550px;
  overflow-x: hidden;
  transition: transform 1s;
`;

export const PartyLayout = styled.div`
  .leftBtn {
    position: absolute;
    top: 60vh;
    left: 30px;
    color: ${props => props.theme.style.tomato};
    z-index: 1;

    &:hover {
      top: 59.7vh;
    }
  }

  .rightBtn {
    position: absolute;
    top: 60vh;
    right: 30px;
    color: ${props => props.theme.style.tomato};
    z-index: 1;

    &:hover {
      top: 59.7vh;
    }
  }
`;
