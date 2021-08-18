import {createSlice} from "@reduxjs/toolkit";

const initialState = true;

export const burgerSlice = createSlice({
    name: "burger",
    initialState,
    reducers: {
        clickedBurger: (state, action) => {
            const update = !action.payload;
            return update;
        },
    },
});

export const {clickedBurger} = burgerSlice.actions;

export default burgerSlice.reducer;
