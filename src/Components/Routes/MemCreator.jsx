import uuid from "react-uuid";
import {StyledRoute, StyledForm} from "./StyledRoute";
// redux
import {useDispatch, useSelector} from "react-redux";
import {addElement} from "../../redux/slice/objectSlice";
import {
    memCreatorTitle,
    memCreatorUrl,
    clearForm,
} from "../../redux/slice/formSlice";

export const MemCreator = () => {
    // redux
    const dispatch = useDispatch();

    const form = useSelector((state) => state.form);

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
        dispatch(clearForm());
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
                    onChange={(e) => dispatch(memCreatorTitle(e.target.value))}
                />
                <input
                    type="text"
                    placeholder="IMG SRC (enter URL)"
                    id="imgSrc"
                    value={form.imgSRC}
                    onChange={(e) => dispatch(memCreatorUrl(e.target.value))}
                />
                <button>add mem</button>
            </StyledForm>
        </StyledRoute>
    );
};
