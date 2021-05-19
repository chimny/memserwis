import {createContext, useState} from "react";

const memes = [
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
];

export const AppContext = createContext(memes);
