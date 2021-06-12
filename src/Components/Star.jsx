import React, {useContext} from "react";
import {AppContext} from "../Context/AppContext";
import {Mem} from "./Mem";

export const Star = () => {
    const {memes, setMemes, starMemes} = useContext(AppContext);

    // zmodyfikować propsy
    return (
        <>
            {starMemes.map((mem) => (
                <Mem
                    title={mem.name}
                    upVote={mem.upVote}
                    downVote={mem.downVote}
                    id={mem.id}
                    key={mem.id}
                    imgSRC={mem.imgSRC}
                    star={mem.star}
                />
            ))}
        </>
    );
};
