import React, {useContext} from "react";
import {Mem} from "./Mem";

import {AppContext} from "../Context/AppContext";

export const Hot = () => {
    const {message} = useContext(AppContext);
    return (
        <>
            <p>Hot {message}</p>
        </>
    );
};
