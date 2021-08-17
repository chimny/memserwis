import {StyledNavigation, StyledMenu} from "./StyledNavigation";
import {useContext} from "react";
import {AppContext} from "../../Context/AppContext";
import {NavLink} from "react-router-dom";
import {Burger} from "./Burger/Burger";

export const Navigation = () => {
    const {open} = useContext(AppContext);

    return (
        <StyledMenu>
            <Burger />
            <StyledNavigation open={open}>
                <ul>
                    <li>
                        <NavLink to="/regular" activeClassName="active">
                            Regular
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/hot" activeClassName="active">
                            Hot
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/star" activeClassName="active">
                            Star
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/memCreator" activeClassName="active">
                            memCreator
                        </NavLink>
                    </li>
                </ul>
            </StyledNavigation>
        </StyledMenu>
    );
};
