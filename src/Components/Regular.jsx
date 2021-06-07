import React, {useContext} from "react";
import {AppContext} from "../Context/AppContext";
import {Mem} from "./Mem";

export const Regular = () => {
    const {memes, setMemes, regularMemes} = useContext(AppContext);

    // zmodyfikować propsy
    return (
        <>
            {regularMemes.map((element) => (
                <Mem
                    title={element.name}
                    upVote={element.upVote}
                    downVote={element.downVote}
                    // upVoteHandler={() => upVoteHandler(index, hookReference)}
                    key={element.id}
                    // index={index}
                    // downVoteHandler={() =>
                    //     downVoteHandler(index, hookReference)
                    // }
                    hot={element.hot}
                    imgSRC={element.imgSRC}
                />
            ))}
        </>
    );
};
