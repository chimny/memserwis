export const Mem = (props) => {
    const {
        title,
        upVote,
        downVote,
        downVoteHandler,
        index,
        upVoteHandler,
    } = props;

    return (
        <>
            <p>{title}</p>
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
