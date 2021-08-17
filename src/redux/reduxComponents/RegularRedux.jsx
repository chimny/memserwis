import React, {useContext} from "react";
import {StyledRoute} from "../../Components/Routes/StyledRoute";
import {ReduxMem} from "./ReduxMem";

import {useSelector} from "react-redux";
// import {incrementElement, decreaseElement} from "../redux/slice/objectSlice";

export const RegularRedux = () => {
    const count = useSelector((state) => state.valueObject);
    // const filteredValues = count.filter((element) => element.upVote > 5);

    return (
        <StyledRoute>
            {count.map((mem) => {
                const {name, downVote, upVote, id, imgSRC, star} = mem;
                return (
                    <ReduxMem
                        title={name}
                        upVote={upVote}
                        downVote={downVote}
                        id={id}
                        key={id}
                        imgSRC={imgSRC}
                        star={star}
                    />
                );
            })}
        </StyledRoute>
    );
};
