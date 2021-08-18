import {createSlice} from "@reduxjs/toolkit";

const initialState = false;

export const burgerSlice = createSlice({
    name: "burger",
    initialState,
    reducers: {
        clickedBurger: (state) => {
            return !state;
        },
    },
});

export const {clickedBurger} = burgerSlice.actions;

export default burgerSlice.reducer;
