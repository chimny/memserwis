import styled from "styled-components";


export const StyledNavigation = styled.nav`
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



}


ul{
  li{
    list-style: none;
    a {
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;

     &:hover,&.active {
       text-decoration:underline;
      color: white;
    }
      }
  }