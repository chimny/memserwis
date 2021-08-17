import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    title: "",
    imgSRC: "",
};

export const FormSlice = createSlice({
    name: "FormSlice",
    initialState,
    reducers: {
        addElement: (state, action) => {
            const newMem = action.payload;

            return [newMem, ...state];
        },
    },
});

export const {addElement} = FormSlice.actions;

export default FormSlice.reducer;
