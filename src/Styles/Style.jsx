import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

// global styles

export const GlobalStyle = createGlobalStyle`
    html, body {
    margin: 0;
    padding: 0;
    text-align:center;
    background: ${({ theme }) => theme.primaryLight};
    color: ${({ theme }) => theme.primaryLight};
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
`;

// wrapper for navigation and MemWrapper
export const Wrapper = styled.div`
  display: flex;
`;

// navigation
export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primary};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);

  @media (max-width: ${({ theme }) => theme.mobile}) {
    /* width: 100%; */
  }

ul{
  li{
    list-style: none;
    a {
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;

     &:hover,&.active {
       text-decoration:underline;
      color: ${({ theme }) => theme.primaryLight};
    }
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

