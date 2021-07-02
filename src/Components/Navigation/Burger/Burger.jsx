import React, {useContext} from "react";

import {AppContext} from "../../../Context/AppContext";
import {StyledBurger} from "./StyledBurger";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

export const Burger = () => {
    const {open, setOpen} = useContext(AppContext);

    const openHandler = () => {
        setOpen((openState) => !openState);
    };

    return (
        <StyledBurger onClick={openHandler} open={open}>
            <button> {<FontAwesomeIcon icon={faBars} />}</button>
        </StyledBurger>
    );
};
