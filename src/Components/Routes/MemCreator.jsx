import uuid from "react-uuid";
import React, {useContext} from "react";
import {AppContext} from "../../Context/AppContext";
import { StyledRoute } from "./StyledRoute";

export const MemCreator = () => {
    const {setMemes} = useContext(AppContext);

    const NewMemHandler = (textValue, imgValue) => {
        const NewMem = {
            name: textValue,
            upVote: 0,
            downVote: 0,
            id: `${uuid()}`,
            imgSRC: imgValue,
            star: false,
        };

        setMemes((prevState) => [NewMem, ...prevState]);
        alert("dodano nowy mem");
    };

    const createMemHandler = (e) => {
        e.preventDefault();
        const textValue = document.getElementById("title").value;
        const imgValue = document.getElementById("imgSrc").value;
        return NewMemHandler(textValue, imgValue);
    };

    return (
        <StyledRoute>
            <form onSubmit={createMemHandler}>
                <input type="text" placeholder="Title" id="title" />
                <input
                    type="text"
                    placeholder="IMG SRC (enter URL)"
                    id="imgSrc"
                />
                <button>Add new mem</button>
            </form>
        </StyledRoute>
    );
};
