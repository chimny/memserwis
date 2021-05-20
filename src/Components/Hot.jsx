import React, {useContext} from "react";
import {Mem} from "./Mem";
import {memDisplayfunction} from "../Functions/functions";

import {AppContext} from "../Context/appContext";

export const Hot = () => {
    const {memeRegular} = useContext(AppContext);
    console.log(memeRegular);
    return (
        <>
            <p>Hot {memeRegular}</p>
        </>
    );
};
