import {useState} from "react";
import {AppContext} from "./AppContext";
import uuid from "react-uuid";

export const AppState = (props) => {
    const [memes, setMemes] = useState([
        {
            name: "mem1",
            upVote: 0,
            downVote: 0,
            id: `${uuid()}`,
            imgSRC: "https://i1.kwejk.pl/k/obrazki/2021/05/t7OC4YmUU65nB9Rs.jpg",
            star: true,
        },
        {
            name: "mem2",
            upVote: 7,
            downVote: 0,
            id: "B",
            imgSRC: "https://i1.kwejk.pl/k/obrazki/2021/05/1qEHO1byIHfoThhb.jpg",
            star: false,
        },
        {
            name: "mem3",
            upVote: 0,
            downVote: 0,
            id: `${uuid()}`,
            imgSRC: "https://i1.kwejk.pl/k/obrazki/2021/05/tzgTaBd1Kvs6aMh7.jpg",
            star: true,
        },
        {
            name: "mem4",
            upVote: 0,
            downVote: 0,
            id: `${uuid()}`,
            imgSRC: "https://i1.kwejk.pl/k/obrazki/2021/05/8AQqXgqpZ6PVrzDi.jpg",
            star: true,
        },
    ]);

    const [form, setForm] = useState({
        title: "Loki",
        imgSRC: "https://gfx.radiozet.pl/var/radiozetsg/storage/images/seriale/loki-jest-postacia-lgbt-nowa-zapowiedz-serialu-marvela/16348844-1-pol-PL/Nowa-zapowiedz-serialu-Marvela-potwierdza-ze-Loki-jest-postacia-LGBT-WIDEO_article.jpg",
    });

    const [open, setOpen] = useState(false);

    const topMemes = memes.filter((meme) => {
        return meme.upVote + meme.downVote > 5;
    });

    const regularMemes = memes.filter((meme) => {
        return meme.upVote + meme.downVote <= 5;
    });

    const starMemes = memes.filter((meme) => {
        return meme.star;
    });

    return (
        <AppContext.Provider
            value={{
                memes,
                setMemes,
                topMemes,
                regularMemes,
                starMemes,
                open,
                setOpen,
                form,
                setForm,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};
