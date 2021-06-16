import React, {useContext} from "react";
import {AppContext} from "../../Context/AppContext";
import {Mem} from "../Mem/Mem";
import { StyledRoute } from "./StyledRoute";

export const Regular = () => {
    const {regularMemes} = useContext(AppContext);

    return (
        <StyledRoute>
            {regularMemes.map((mem) => {
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
        </StyledRoute>
    );
};
