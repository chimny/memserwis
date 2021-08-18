import {configureStore} from "@reduxjs/toolkit";
import counterObjectReducer from "./slice/objectSlice";
import formReducer from "./slice/formSlice";
import burgerReducer from "./slice/burgerSlice";

export const store = configureStore({
    reducer: {
        valueObject: counterObjectReducer,
        form: formReducer,
        burger: burgerReducer,
    },
});
