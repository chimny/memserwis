import styled from "styled-components";
import {createGlobalStyle} from "styled-components";

// global styles

export const GlobalStyle = createGlobalStyle`
    body {
    color: white;
    text-align: center;
    margin: 0;
    text-transform: uppercase;
    }
`;

// styles for single mem
export const MemWrapper = styled.div`
    background: blue;
    padding: 20px 0;
    width: 70vw;
    margin: 0 auto;
`;
