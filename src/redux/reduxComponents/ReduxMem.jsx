import {StyledMem} from "../../Components/Mem/StyledMem";
// import React, {useContext} from "react";
// import {AppContext} from "../../Context/AppContext";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faThumbsUp} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {
    incrementElement,
    decreaseElement,
    starElement,
} from "../slice/objectSlice";

export const ReduxMem = (props) => {
    const {title, upVote, downVote, imgSRC, id, star} = props;
    const dispatch = useDispatch();

    return (
        <StyledMem star={star}>
            <h3>{title}</h3>
            <img src={imgSRC} alt="mem" />
            <div className="buttons">
                <button onClick={() => dispatch(incrementElement(id))}>
                    {<FontAwesomeIcon icon={faThumbsUp} />} {upVote}
                </button>
                <button onClick={() => dispatch(decreaseElement(id))}>
                    <FontAwesomeIcon icon={faThumbsUp} rotation={180} />{" "}
                    {downVote}
                </button>
                <button
                    className={"starButton"}
                    onClick={() => dispatch(starElement(id))}
                >
                    {<FontAwesomeIcon icon={faHeart} />}
                </button>
            </div>
        </StyledMem>
    );
};
