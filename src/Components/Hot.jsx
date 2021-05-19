import {useContext} from "react";
import {Mem} from "./Mem";

import {AppContext} from "../Context/app-context";

export const Hot = () => {
    const {message} = useContext(AppContext);
    return (
        <>
            <p>Hot</p>
            <p>{message}</p>
        </>
    );
};
