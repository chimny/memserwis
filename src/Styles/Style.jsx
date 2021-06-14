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
    background: rgb(19, 163, 207);
    font-size: 1.5rem;

    & ul {
        padding: 0;
    }
    & li {
        display: block;
        /* height: 30px; */
        padding: 10px 0;
        list-style: none;
        width: 100%;
        & a {
            display: inline-block;
            width: 15vw;
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
