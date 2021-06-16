import {theme} from "../../GlobalStyles/theme";
import styled from "styled-components";

export const StyledMem = styled.div`
  position: relative;
  background: 'blue';
  color:${theme.primaryDark};
  border: 2px solid black;
  width: 50vw;
  margin: 0 auto 2rem auto;
  h3{
    text-transform: uppercase;
  }

  .starButton{
    position:absolute;
    top: 1rem;
    right: 1.5rem;
    color:${props => props.star ? theme.withStar:theme.nonStar};
    background:transparent;
    border: none;
    font-size: 2rem;
    transition: 0.3s linear;
  }
`;