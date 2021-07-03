import styled from "styled-components";
import {theme} from "../../GlobalStyles/theme";

export const StyledRoute = styled.div`
    padding: 2rem 0;
    width: 100vw;
    min-height: 100vh;
    color: ${theme.primaryDark};
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const StyledForm = styled.form`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${theme.primary};
    width: 50%;
    height: 50vh;

    @media (max-width: ${({theme}) => theme.mobile}) {
        width: 75%;
    }

    input {
        display: block;
        width: 50%;
        margin: 1rem auto;
        text-align: center;
    }
    button {
        background-color: ${theme.primaryDark};
        color: ${theme.primaryLight};
        border: 1px solid black;
        font-size: 1.5rem;
        cursor: pointer;
        transition: 0.2s linear;

        &:hover {
            color: ${theme.primaryDark};
            background: ${theme.secondary};
        }
    }
`;
