import {useState} from "react";
import {AppContext} from "./AppContext";
import uuid from "react-uuid";

const initialMemes = [
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
];

export const AppState = (props) => {
    // app states
    const [memes, setMemes] = useState(initialMemes);

    const [form, setForm] = useState({
        title: "Loki",
        imgSRC: "https://gfx.radiozet.pl/var/radiozetsg/storage/images/seriale/loki-jest-postacia-lgbt-nowa-zapowiedz-serialu-marvela/16348844-1-pol-PL/Nowa-zapowiedz-serialu-Marvela-potwierdza-ze-Loki-jest-postacia-LGBT-WIDEO_article.jpg",
    });

    const [open, setOpen] = useState(false);
    // routes rules
    const topMemes = memes.filter((meme) => {
        return meme.upVote + meme.downVote > 5;
    });

    const regularMemes = memes.filter((meme) => {
        return meme.upVote + meme.downVote <= 5;
    });

    const starMemes = memes.filter((meme) => {
        return meme.star;
    });
    // voting handlers

    // to działa
    // const downVoteHandler = (id) => {
    //     setMemes((prevState) => {
    //         return prevState.map((mem) => {
    //             if (mem.id === id) {
    //                 if (mem.downVote === 0) {
    //                     return {...mem, downVote: --mem.downVote};
    //                 } else return {...mem, downVote: mem.downVote--};
    //             } else return mem;
    //         });
    //     });
    // };

    const downVoteHandler = (id) => {
        setMemes((prevState) => {
            return prevState.map((mem) => {
                if (mem.id === id) {
                    switch (mem.downVote) {
                        case 0:
                            return {...mem, downVote: --mem.downVote};
                        default:
                            return {...mem, downVote: mem.downVote--};
                    }
                } else return mem;
            });
        });
    };

    const upVoteHandler = (id) => {
        setMemes((prevState) => {
            return prevState.map((mem) => {
                if (mem.id === id) {
                    switch (mem.upVote) {
                        case 0:
                            return {...mem, upVote: ++mem.upVote};
                        default:
                            return {...mem, upVote: mem.upVote++};
                    }
                } else return mem;
            });
        });
    };

    const starHandler = (id) => {
        setMemes((prevState) => {
            return prevState.map((mem) => {
                return mem.id === id ? {...mem, star: !mem.star} : mem;
            });
        });
    };

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
                upVoteHandler,
                downVoteHandler,
                starHandler,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};
