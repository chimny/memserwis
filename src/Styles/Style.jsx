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
    width: 90vw;
    margin: 0 0 0 auto;
`;

// navigation

export const Navigation = styled.nav`
    position: fixed;
    width: 10vw;
    height: 100vh;
    background: rgb(221, 115, 129);
`;

export const Wrapper = styled.div``;
