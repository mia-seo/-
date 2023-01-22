import styled from "styled-components";

export const Profiles = styled.div`
  ${props => props.theme.variables.wh("90vw", "30vh")};
  ${props => props.theme.variables.flex("", "", "")};
  /* ${props => props.theme.style.radius};
  background-color: white; */
  gap: 10px;
`;

export const Profile = styled.div`
  ${props => props.theme.variables.wh("15vw", "30vh")};
  ${props => props.theme.variables.flex("column", "space-between", "center")};
  ${props => props.theme.style.radius};
  background-color: ${props => props.theme.style.lightTomato};

  img {
    ${props => props.theme.variables.wh("10vw", "20vh")};
    border-radius: 50%;
    margin-top: 20px;
  }

  div {
    /* ${props => props.theme.variables.wh("10vw", "10vh")}; */
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
    color: white;
  }
`;
