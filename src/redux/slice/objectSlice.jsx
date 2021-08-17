import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid";

const initialState = [
    {
        value: 2,
        id: uuidv4(),
    },
    {
        value: 4,
        id: uuidv4(),
    },
    {
        value: 8,
        id: uuidv4(),
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
                    ? {...element, value: element.value + incrementValue}
                    : element;
            });
        },

        decreaseElement: (state, action) => {
            const decreasetValue = 1;
            const passedID = action.payload;

            return state.map((element) => {
                return element.id === passedID
                    ? {...element, value: element.value - decreasetValue}
                    : element;
            });
        },
    },
});

export const {incrementElement, decreaseElement} = counterObject.actions;

export default counterObject.reducer;
