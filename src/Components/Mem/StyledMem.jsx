import {theme} from "../../GlobalStyles/theme";
import styled from "styled-components";

export const StyledMem = styled.div`
  background: 'blue';
  color:${theme.primaryDark};
  border: 2px solid black;
  width: 50vw;
  margin: 0 auto 2rem auto;
  h3{
    text-transform: uppercase;
  }
`;