export const Mem = (props) => {
    return (
        <>
            <p>{props.title}</p>
            <div>
                Liczba upVote : {props.upVote}
                Liczba downVote : {props.downVote}
            </div>
            <div>
                <button>UpVote</button>
                <button>DownVote</button>
            </div>
        </>
    );
};
