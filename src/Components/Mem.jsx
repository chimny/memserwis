export const Mem = (props) => {
    const {title, upVote, downVote, array, index, upVoteHandler} = props;

    return (
        <>
            <p>{title}</p>
            <div>
                Liczba upVote : {upVote}
                Liczba downVote : {downVote}
            </div>
            <div>
                <button onClick={upVoteHandler}>
                    {/* <button onClick={() => upVoteHandler(array, index)}> */}
                    UpVote
                </button>
                <button>DownVote</button>
            </div>
        </>
    );
};
