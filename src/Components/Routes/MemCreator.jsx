import uuid from "react-uuid";
import React, {useContext} from "react";
import {AppContext} from "../../Context/AppContext";
import {StyledRoute, StyledForm} from "./StyledRoute";
import {useDispatch} from "react-redux";
import {addElement} from "../../redux/slice/objectSlice";

export const MemCreator = () => {
    // const {setMemes, form, setForm} = useContext(AppContext);
    const {form, setForm} = useContext(AppContext);

    // redux
    const dispatch = useDispatch();

    const NewMemHandler = (name, imgSrc) => {
        const NewMem = {
            name: name,
            upVote: 0,
            downVote: 0,
            id: uuid(),
            imgSRC: imgSrc,
            star: false,
        };
        dispatch(addElement(NewMem));

        alert("dodano nowy mem");
    };

    const createMemHandler = (e) => {
        e.preventDefault();
        NewMemHandler(form.title, form.imgSRC);
        setForm({title: "", imgSRC: ""});
    };

    return (
        <StyledRoute>
            <StyledForm onSubmit={createMemHandler}>
                <h2>MEMCREATOR</h2>
                <input
                    type="text"
                    placeholder="Title"
                    id="title"
                    value={form.title}
                    onChange={(e) => setForm({...form, title: e.target.value})}
                />
                <input
                    type="text"
                    placeholder="IMG SRC (enter URL)"
                    id="imgSrc"
                    value={form.imgSRC}
                    onChange={(e) => setForm({...form, imgSRC: e.target.value})}
                />
                <button>add mem</button>
            </StyledForm>
        </StyledRoute>
    );
};
