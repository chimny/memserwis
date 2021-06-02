import styled from "styled-components";

const MemWrapper = styled.div`
    background: red;
    width: 70vw;
    margin: 0 auto;
`;

export const Mem = (props) => {
    const {
        title,
        upVote,
        downVote,
        downVoteHandler,
        index,
        upVoteHandler,
        imgSRC,
    } = props;

    return (
        <MemWrapper>
            <h3>{title}</h3>
            <img src={imgSRC} alt="mem" />
            <div>
                Liczba upVote : {upVote}
                Liczba downVote : {downVote}
            </div>
            <div>
                <button onClick={() => upVoteHandler(index)}>UpVote</button>
                <button onClick={() => downVoteHandler(index)}>DownVote</button>
            </div>
        </MemWrapper>
    );
};
