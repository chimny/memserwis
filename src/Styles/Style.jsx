import styled from "styled-components";
import {createGlobalStyle} from "styled-components";

// global styles

export const GlobalStyle = createGlobalStyle`
    body {
    text-align: center;
    font-family: 'roboto';
    margin: 0;
    }
`;

// wrapper for navigation and MemWrapper
export const Wrapper = styled.div`
    display: flex;
`;

// navigation
export const Navigation = styled.nav`
    position: fixed;
    width: 15vw;
    height: 100vh;
    background: rgb(221, 115, 129);
    font-size: 1.5rem;
    & ul {
        margin: 50% auto;
    }
    & li {
        display: block;
        width: 100%;
        list-style: none;
        & a {
            color: black;
            text-decoration: none;
            font-weight: bold;
        }
    }
`;

// styles for single mem
export const MemWrapper = styled.div`
    background: #87a4da;
    padding: 20px 0;
    width: 80vw;
    margin: 0 0 0 auto;
`;

// object to set activeTab in menu
export const activeTab = {
    color: "red",
};
