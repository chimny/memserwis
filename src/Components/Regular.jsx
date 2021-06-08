import React, {useContext} from "react";
import {AppContext} from "../Context/AppContext";
import {Mem} from "./Mem";

export const Regular = () => {
    const {memes, setMemes, regularMemes} = useContext(AppContext);

    // zmodyfikować propsy
    return (
        <>
            {regularMemes.map((mem) => (
                <Mem
                    title={mem.name}
                    upVote={mem.upVote}
                    downVote={mem.downVote}
                    id={mem.id}
                    key={mem.id}
                    imgSRC={mem.imgSRC}
                />
            ))}
        </>
    );
};
