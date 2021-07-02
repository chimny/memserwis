import {StyledMem} from "./StyledMem";
import React, {useContext} from "react";
import {AppContext} from "../../Context/AppContext";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faThumbsUp} from "@fortawesome/free-solid-svg-icons";

export const Mem = (props) => {
    const {upVoteHandler, downVoteHandler, starHandler} =
        useContext(AppContext);
    const {title, upVote, downVote, imgSRC, id, star} = props;

    return (
        <StyledMem star={star}>
            <h3>{title}</h3>
            <img src={imgSRC} alt="mem" />
            <div className="buttons">
                <button onClick={() => upVoteHandler(id)}>
                    {<FontAwesomeIcon icon={faThumbsUp} />} {upVote}
                </button>
                <button onClick={() => downVoteHandler(id)}>
                    <FontAwesomeIcon icon={faThumbsUp} rotation={180} />{" "}
                    {downVote}
                </button>
                <button
                    className={"starButton"}
                    onClick={() => starHandler(id)}
                >
                    {<FontAwesomeIcon icon={faHeart} />}
                </button>
            </div>
        </StyledMem>
    );
};
