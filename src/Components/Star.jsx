import React, {useContext} from "react";
import {AppContext} from "../Context/AppContext";
import {Mem} from "./Mem";

export const Star = () => {
    const {starMemes} = useContext(AppContext);

    return (
        <>
            {starMemes.map((mem) => {
                const {name, downVote, upVote, id, imgSRC, star} = mem;
                return (
                    <Mem
                        title={name}
                        upVote={upVote}
                        downVote={downVote}
                        id={id}
                        key={id}
                        imgSRC={imgSRC}
                        star={star}
                    />
                );
            })}
        </>
    );
};
