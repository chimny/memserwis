import React, {useContext} from "react";
import {memDisplayfunction} from "../Functions/functions";
import {AppContext} from "../Context/AppContext";

export const Regular = () => {
    const {memeRegular, setMemeRegular} = useContext(AppContext);
    console.log(memeRegular);
    return (
        <>
            <p> Regular </p>
            {memDisplayfunction(memeRegular, setMemeRegular)}
        </>
    );
};
