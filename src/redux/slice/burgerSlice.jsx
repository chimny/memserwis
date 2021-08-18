import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    open: false,
};

export const burgerSlice = createSlice({
    name: "burger",
    initialState,
    reducers: {
        clickedBurger: (state) => {
            return {open: !state.open};
        },
    },
});

export const {clickedBurger} = burgerSlice.actions;

export default burgerSlice.reducer;
