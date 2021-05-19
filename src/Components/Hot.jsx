import {useContext} from "react";

import {AppContext} from "../Context/app-context";

export const Hot = (props) => {
    const {message} = useContext(AppContext);
    return (
        <>
            <p>Hot</p>
            <p>{message}</p>
        </>
    );
};
