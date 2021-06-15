import {StyledNavigation} from "./StyledNavigation";
import {useContext} from "react";
import {AppContext} from "../../Context/AppContext";

export const Navigation = (props) => {
    const {memes, setMemes} = useContext(AppContext);
    const {open} = props;

    return <StyledNavigation open={open} />;
};
