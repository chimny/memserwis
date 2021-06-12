import {MemWrapper} from "../Styles/Style";
import React, {useContext} from "react";
import {AppContext} from "../Context/AppContext";

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
        const initialState = [...memes];
        const updatedMem = initialState.find((mem) => mem.id === id);
        const starupdate = updatedMem.star;
        console.log(starupdate);
        setMemes([...initialState, {...updatedMem, star: true}]);
    };

    return (
        <MemWrapper>
            <h3>{title}</h3>

            <img src={imgSRC} alt="mem" />
            <div>
                <p>Liczba upVote : {upVote}</p>
                <p> Liczba downVote : {downVote}</p>
                <p>{star} </p>
            </div>
            <div>
                <button onClick={() => upVoteHandler(id)}>UpVote</button>
                <button onClick={() => downVoteHandler(id)}>DownVote</button>
                <button onClick={() => starHandler(id)}>Star</button>
            </div>
        </MemWrapper>
    );
};
