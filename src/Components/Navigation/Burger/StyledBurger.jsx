import styled from "styled-components";

export const StyledBurger = styled.button`
    position: relative;
    top: 2rem;
    left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1;
    button {
        border: none;
        background-color: transparent;
        cursor: pointer;
        font-size: 2rem;
        color: ${(props) =>
            props.open
                ? ({theme}) => theme.primaryDark
                : ({theme}) => theme.primary};
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
    }
`;
