import React, {useContext} from "react";

import {AppContext} from "../Context/AppContext";
import {Mem} from "./Mem";

export const Hot = () => {
    const {memes, setMemes, topMemes} = useContext(AppContext);

    // zmodyfikować propsy
    return (
        <>
            {topMemes.map((element) => (
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
