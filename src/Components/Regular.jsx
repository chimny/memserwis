import {useContext} from "react";
import {AppContext} from "../Context/AppContext";

export const Regular = (props) => {
    const {message} = useContext(AppContext);
    // console.log(message);
    return (
        <>
            <p>Regular {message}</p>
        </>
    );
};
