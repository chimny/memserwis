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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15vw;
    height: 100%;
    background: rgb(3, 170, 221);
    font-size: 1.5rem;
    & ul {
        margin: 0 auto;
    }
    & li {
        display: inline;

        list-style: none;
        width: 100%;
        & a {
            display: block;
            width: 100%;
            margin: 50px 0;
            color: white;
            text-decoration: none;
            font-weight: bold;
            &:hover {
                text-decoration: underline;
            }
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
    color: "black",
    backgroundColor: "rgb(10, 218, 255)",
};
