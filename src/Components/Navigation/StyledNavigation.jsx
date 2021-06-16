import styled from "styled-components";
import {theme} from "../../GlobalStyles/theme";

export const StyledNavigation = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${theme.primary};
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    transform: ${({open}) => (open ? "translateX(0)" : "translateX(-100%)")};

    ul {
        li {
            list-style: none;
            a {
                font-size: 1.5rem;
                text-transform: uppercase;
                font-weight: bold;
                letter-spacing: 0.5rem;
                color: ${theme.primaryDark};
                text-decoration: none;
                transition: color 0.3s linear;

                &:hover,
                &.active {
                    text-decoration: underline;
                    color: ${theme.primaryLight};
                }
            }
        }
    }
`;


export const StyledMenu = styled.div`position: fixed;`