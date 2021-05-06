import {memDisplayfunction} from "./Main";
let test = [2, 1];

export const Hot = (props) => {
    return memDisplayfunction(test);
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
