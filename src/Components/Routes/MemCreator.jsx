import uuid from "react-uuid";
import React, {useState, useContext} from "react";
import {AppContext} from "../../Context/AppContext";
import {StyledRoute} from "./StyledRoute";

export const MemCreator = () => {
    const {setMemes} = useContext(AppContext);
    const [form, setForm] = useState({
        title: "Loki",
        imgSRC: "https://gfx.radiozet.pl/var/radiozetsg/storage/images/seriale/loki-jest-postacia-lgbt-nowa-zapowiedz-serialu-marvela/16348844-1-pol-PL/Nowa-zapowiedz-serialu-Marvela-potwierdza-ze-Loki-jest-postacia-LGBT-WIDEO_article.jpg",
    });

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
                <input
                    type="text"
                    placeholder="Title"
                    id="title"
                    value={form.title}
                />
                <input
                    type="text"
                    placeholder="IMG SRC (enter URL)"
                    id="imgSrc"
                    value={form.imgSRC}
                />
                <button>Add new mem</button>
            </form>
        </StyledRoute>
    );
};
