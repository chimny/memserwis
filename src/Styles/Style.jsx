import styled from "styled-components";
import {createGlobalStyle} from "styled-components";

// global styles

export const GlobalStyle = createGlobalStyle`
    body {
    /* color: white; */
    text-align: center;
    margin: 0;

    }
`;

// styles for single mem
export const MemWrapper = styled.div`
    background: #87a4da;
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

export const Wrapper = styled.div`
    display: flex;
`;

// object to set activeTab in menu
export const activeTab = {
    color: "red",
};
