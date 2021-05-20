import {Children, useState} from "react";
import {AppContext} from "./appContext";
import {memDisplayfunction} from "../Functions/functions";

export const AppState = (props) => {
    const [memeRegular, setMemeRegular] = useState([
        {
            name: "mem1",
            upVote: 0,
            downVote: 0,
            id: "A",
            hot: false,
        },
        {
            name: "mem2",
            upVote: 0,
            downVote: 0,
            id: "B",
            hot: false,
        },
        {
            name: "mem3",
            upVote: 0,
            downVote: 0,
            id: "C",
            hot: false,
        },
        {
            name: "mem4",
            upVote: 0,
            downVote: 0,
            id: "D",
            hot: false,
        },
    ]);

    return (
        <AppContext.Provider value={memeRegular}>
            {props.children}
        </AppContext.Provider>
    );
};
