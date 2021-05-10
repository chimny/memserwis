import {Mem} from "./Mem";

export const Hot = (props) => {
    return <p>{props.memeHot}</p>;
};

// const memDisplayfunction = (array) => {
//     return array.map((element, index) => (
//         <Mem
//             title={element.name}
//             upVote={element.upVote}
//             downVote={element.downVote}
//             upVoteHandler={upVoteHandler}
//             key={element.id}
//             index={index}
//             downVoteHandler={downVoteHandler}
//         />
//     ));
