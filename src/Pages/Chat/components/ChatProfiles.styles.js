import styled from "styled-components";

export const Profiles = styled.div`
  ${props => props.theme.variables.wh("90vw", "30vh")};
  background-color: green;
`;

export const Profile = styled.div`
  ${props => props.theme.variables.wh("15vw", "30vh")};
  background-color: red;
`;
