import {StyledMem} from "./StyledMem";
import React, {useContext} from "react";
import {AppContext} from "../../Context/AppContext";

export const Mem = (props) => {
    const {memes, setMemes} = useContext(AppContext);
    const {title, upVote, downVote, imgSRC, id, star} = props;

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

    const starHandler = (id) => {
        setMemes((prevState) => {
            return prevState.map((mem) => {
                return mem.id === id ? {...mem, star: !mem.star} : mem;
            });
        });
    };

    return (
        <StyledMem>
            <h3>{title}</h3>

            <img src={imgSRC} alt="mem" />
            <div>
                <p>Liczba upVote : {upVote}</p>
                <p> Liczba downVote : {downVote}</p>
            </div>
            <div>
                <button onClick={() => upVoteHandler(id)}>UpVote</button>
                <button onClick={() => downVoteHandler(id)}>DownVote</button>
                <button onClick={() => starHandler(id)}>
                    {star ? "Remove star" : "Give star"}
                </button>
            </div>
        </StyledMem>
    );
};
