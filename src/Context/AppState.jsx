import {AppContext} from "./app-context";

export const AppState = (props) => {
    return (
        <AppContext.Provider value={{message: "this is from context"}}>
            <p>{props.children}</p>
        </AppContext.Provider>
    );
};
