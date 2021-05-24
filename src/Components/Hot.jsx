import React, {useContext, useState} from "react";
import {memDisplayfunction} from "../Functions/functions";
import {AppContext} from "../Context/appContext";

export const Hot = () => {
    const {memeRegular, setMemeRegular} = useContext(AppContext);
    console.log(memeRegular);
    return (
        <>
            <p> lol </p>
            {memDisplayfunction(memeRegular, setMemeRegular)}
        </>
    );
};
