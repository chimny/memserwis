import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    title: "",
    imgSRC: "",
};

export const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        memCreatorTitle: (state, action) => {
            const memTitle = action.payload;
            return {...state, title: `${memTitle}`};
        },
        memCreatorUrl: (state, action) => {
            const memUrl = action.payload;
            return {...state, imgSRC: memUrl};
        },
        clearForm: (state) => {
            return {
                title: "",
                imgSRC: "",
            };
        },
    },
});

export const {memCreatorTitle, memCreatorUrl, clearForm} = formSlice.actions;

export default formSlice.reducer;
