import React, {useContext} from "react";
import {memDisplayfunction} from "../Functions/functions";
import {AppContext} from "../Context/AppContext";

export const Hot = () => {
    const {memeRegular, setMemeRegular} = useContext(AppContext);
    const topMemes = memeRegular.filter(
        (element) => element.upVote + element.downVote > 5
    );
    return (
        <>
            <p> lol </p>
            {memDisplayfunction(topMemes, setMemeRegular, memeRegular)}
        </>
    );
};
