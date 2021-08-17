import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid";

const initialState = [
    {
        name: "mem1",
        upVote: 0,
        downVote: 0,
        id: `${uuidv4()}`,
        imgSRC: "https://i1.kwejk.pl/k/obrazki/2021/05/t7OC4YmUU65nB9Rs.jpg",
        star: true,
    },
    {
        name: "mem2",
        upVote: 7,
        downVote: 0,
        id: `${uuidv4()}`,
        imgSRC: "https://i1.kwejk.pl/k/obrazki/2021/05/1qEHO1byIHfoThhb.jpg",
        star: false,
    },
    {
        name: "mem3",
        upVote: 0,
        downVote: 0,
        id: `${uuidv4()}`,
        imgSRC: "https://i1.kwejk.pl/k/obrazki/2021/05/tzgTaBd1Kvs6aMh7.jpg",
        star: true,
    },
    {
        name: "mem4",
        upVote: 0,
        downVote: 0,
        id: `${uuidv4()}`,
        imgSRC: "https://i1.kwejk.pl/k/obrazki/2021/05/8AQqXgqpZ6PVrzDi.jpg",
        star: true,
    },
];

export const counterObject = createSlice({
    name: "valueObject",
    initialState,
    reducers: {
        incrementElement: (state, action) => {
            const incrementValue = 1;
            const passedID = action.payload;

            return state.map((element) => {
                return element.id === passedID
                    ? {...element, upVote: element.upVote + incrementValue}
                    : element;
            });
        },

        decreaseElement: (state, action) => {
            const decreasetValue = 1;
            const passedID = action.payload;

            return state.map((element) => {
                return element.id === passedID
                    ? {...element, downVote: element.downVote - decreasetValue}
                    : element;
            });
        },
        starElement: (state, action) => {
            const passedID = action.payload;

            return state.map((element) => {
                return element.id === passedID
                    ? {...element, star: !element.star}
                    : element;
            });
        },
    },
});

export const {incrementElement, decreaseElement, starElement} =
    counterObject.actions;

export default counterObject.reducer;
