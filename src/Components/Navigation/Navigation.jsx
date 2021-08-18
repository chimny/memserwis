import {StyledNavigation, StyledMenu} from "./StyledNavigation";
import {NavLink} from "react-router-dom";
import {Burger} from "./Burger/Burger";
import {useSelector} from "react-redux";

export const Navigation = () => {
    const burgerStatus = useSelector((state) => state.burger);

    return (
        <StyledMenu>
            <Burger />
            <StyledNavigation open={burgerStatus}>
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
