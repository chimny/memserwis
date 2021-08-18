import {StyledBurger} from "./StyledBurger";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

import {clickedBurger} from "../../../redux/slice/burgerSlice";
import {useSelector, useDispatch} from "react-redux";

export const Burger = () => {
    const burgerStatus = useSelector((state) => state.burger);

    const dispatch = useDispatch();

    return (
        <StyledBurger
            onClick={() => dispatch(clickedBurger)}
            open={burgerStatus}
        >
            {<FontAwesomeIcon icon={faBars} />}
        </StyledBurger>
    );
};
