import {theme} from "../../GlobalStyles/theme";
import styled from "styled-components";

export const StyledMem = styled.div`
    position: relative;
    background: "blue";
    color: ${theme.primaryDark};
    width: 50vw;
    margin: 0 auto 2rem auto;
    h3 {
        text-transform: uppercase;
    }
    img {
        max-width: 100%;
    }

    .buttons {
        background-color: ${theme.primary};
        height: 3rem;

        * {
            cursor: pointer;
            background: transparent;
            border: none;
            font-size: 2rem;
            line-height: 3rem;
        }
    }

    .starButton {
        color: ${(props) => (props.star ? theme.withStar : theme.nonStar)};
        transition: 0.1s linear;
    }
`;
