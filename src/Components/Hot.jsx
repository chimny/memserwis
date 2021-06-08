import React, {useContext} from "react";
import {AppContext} from "../Context/AppContext";
import {Mem} from "./Mem";

export const Hot = () => {
    const {topMemes} = useContext(AppContext);

    return (
        <>
            {topMemes.map((mem) => (
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
