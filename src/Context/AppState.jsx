import {useState} from "react";
import {AppContext} from "./AppContext";

export const AppState = (props) => {
    const [memeRegular, setMemeRegular] = useState([
        {
            name: "mem1",
            upVote: 0,
            downVote: 0,
            id: "A",
            imgSRC: "https://i1.kwejk.pl/k/obrazki/2021/05/t7OC4YmUU65nB9Rs.jpg",
            hot: false,
        },
        {
            name: "mem2",
            upVote: 7,
            downVote: 0,
            id: "B",
            imgSRC: "https://i1.kwejk.pl/k/obrazki/2021/05/1qEHO1byIHfoThhb.jpg",
            hot: false,
        },
        {
            name: "mem3",
            upVote: 0,
            downVote: 0,
            id: "C",
            imgSRC: "https://i1.kwejk.pl/k/obrazki/2021/05/tzgTaBd1Kvs6aMh7.jpg",
            hot: false,
        },
        {
            name: "mem4",
            upVote: 0,
            downVote: 0,
            id: "D",
            imgSRC: "https://i1.kwejk.pl/k/obrazki/2021/05/8AQqXgqpZ6PVrzDi.jpg",
            hot: false,
        },
    ]);

    return (
        <AppContext.Provider value={{memeRegular, setMemeRegular}}>
            {props.children}
        </AppContext.Provider>
    );
};
