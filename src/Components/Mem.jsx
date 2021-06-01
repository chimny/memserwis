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
        <>
            <p>{title}</p>
            <img src={imgSRC} alt="" />
            <div>
                Liczba upVote : {upVote}
                Liczba downVote : {downVote}
            </div>
            <div>
                <button onClick={() => upVoteHandler(index)}>UpVote</button>
                <button onClick={() => downVoteHandler(index)}>DownVote</button>
            </div>
        </>
    );
};
