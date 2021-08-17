import {configureStore} from "@reduxjs/toolkit";
import counterObjectReducer from "./slice/objectSlice";

export const store = configureStore({
    reducer: {
        valueObject: counterObjectReducer,
    },
});
