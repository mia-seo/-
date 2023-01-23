import styled from "styled-components";

export const Container = styled.div`
  ${props => props.theme.variables.wh("100vw", "80vh")}
  ${props => props.theme.variables.flex("column", "center", "center")}
  gap: 20px
`;
