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
    background-color: gray;
    width: 50%;
    height: 50vh;
    input {
        display: block;
        width: 50%;
        margin: 2rem auto;
        text-align: center;
    }
    button {
        background-color: ${theme.primary};
        color: ${theme.primaryLight};
        border: none;
        font-size: 2rem;
        cursor: pointer;
        transition: 0.2s linear;

        &:hover {
            color: ${theme.primaryDark};
        }
    }
`;
