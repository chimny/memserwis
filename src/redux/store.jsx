import {configureStore} from "@reduxjs/toolkit";
import counterObjectReducer from "./slice/objectSlice";
import formReducer from "./slice/formSlice";

export const store = configureStore({
    reducer: {
        valueObject: counterObjectReducer,
        form: formReducer,
    },
});
