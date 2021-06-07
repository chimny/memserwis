import {useState} from "react";
import {AppContext} from "./AppContext";

// wywalić hot w objekcie
export const AppState = (props) => {
    const [memes, setMemes] = useState([
        {
            name: "mem1",
            upVote: 0,
            downVote: 0,
            id: "A",
            imgSRC: "https://i1.kwejk.pl/k/obrazki/2021/05/t7OC4YmUU65nB9Rs.jpg",
        },
        {
            name: "mem2",
            upVote: 7,
            downVote: 0,
            id: "B",
            imgSRC: "https://i1.kwejk.pl/k/obrazki/2021/05/1qEHO1byIHfoThhb.jpg",
        },
        {
            name: "mem3",
            upVote: 0,
            downVote: 0,
            id: "C",
            imgSRC: "https://i1.kwejk.pl/k/obrazki/2021/05/tzgTaBd1Kvs6aMh7.jpg",
        },
        {
            name: "mem4",
            upVote: 0,
            downVote: 0,
            id: "D",
            imgSRC: "https://i1.kwejk.pl/k/obrazki/2021/05/8AQqXgqpZ6PVrzDi.jpg",
        },
    ]);

    const topMemes = memes.filter((meme) => {
        return meme.upVote + meme.downVote > 5;
    });

    const regularMemes = memes.filter((meme) => {
        return meme.upVote + meme.downVote <= 5;
    });

    return (
        <AppContext.Provider value={{memes, setMemes, topMemes, regularMemes}}>
            {props.children}
        </AppContext.Provider>
    );
};
