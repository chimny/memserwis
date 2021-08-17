import React, {useContext} from "react";
import {StyledRoute} from "../../Components/Routes/StyledRoute";
import {Mem} from "../../Components/Mem/Mem";

import {useSelector, useDispatch} from "react-redux";
// import {incrementElement, decreaseElement} from "../redux/slice/objectSlice";

export const RegularRedux = () => {
    // const dispatch = useDispatch();

    const count = useSelector((state) => state.valueObject);
    // const filteredValues = count.filter((element) => element.upVote > 5);

    return (
        <StyledRoute>
            {count.map((mem) => {
                const {name, downVote, upVote, id, imgSRC, star} = mem;
                return (
                    <Mem
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

// export const RegularRedux = () => {
//     return <div>hello!</div>;
// };
