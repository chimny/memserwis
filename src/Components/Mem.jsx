import {MemWrapper} from "../Styles/Style";
import React, {useContext} from "react";
import {AppContext} from "../Context/AppContext";

export const Mem = (props) => {
    const {memes, setMemes} = useContext(AppContext);
    const {title, upVote, downVote, imgSRC, id} = props;

    const upVoteHandler = (id) => {
        const initialState = [...memes];
        const updatedMem = initialState.find((mem) => mem.id === id);
        setMemes([updatedMem.upVote++, ...initialState]);
    };

    const downVoteHandler = (id) => {
        const initialState = [...memes];
        const updatedMem = initialState.find((mem) => mem.id === id);
        setMemes([updatedMem.downVote--, ...initialState]);
    };

    return (
        <MemWrapper>
            <h3>{title}</h3>
            <img src={imgSRC} alt="mem" />
            <div>
                Liczba upVote : {upVote}
                Liczba downVote : {downVote}
            </div>
            <div>
                <button onClick={() => upVoteHandler(id)}>UpVote</button>
                <button onClick={() => downVoteHandler(id)}>DownVote</button>
            </div>
        </MemWrapper>
    );
};
