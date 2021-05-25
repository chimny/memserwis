import {Mem} from "../Components/Mem";

// tutaj useReduce
export const upVoteHandler = (index, hookReference) => {
    return hookReference((prevState) => {
        let initialArray = [...prevState];
        initialArray[index].upVote++;
        if (initialArray[index].upVote + initialArray[index].downVote > 5) {
            initialArray[index].hot = true;
        } else {
            initialArray[index].hot = false;
        }
        return initialArray;
    });
};

// tutaj useReduce
export const downVoteHandler = (index, hookReference) => {
    return hookReference((prevState) => {
        let initialArray = [...prevState];
        initialArray[index].downVote--;
        if (initialArray[index].upVote + initialArray[index].downVote > 5) {
            initialArray[index].hot = true;
        } else {
            initialArray[index].hot = false;
        }
        return initialArray;
    });
};

export const memDisplayfunction = (array, hookReference, pureArray = array) => {
    return array.map((element) => {
        const index = pureArray.findIndex(
            (pureElement) => pureElement.id === element.id
        );
        return (
            <Mem
                title={element.name}
                upVote={element.upVote}
                downVote={element.downVote}
                upVoteHandler={() => upVoteHandler(index, hookReference)}
                key={element.id}
                index={index}
                downVoteHandler={() => downVoteHandler(index, hookReference)}
                hot={element.hot}
            />
        );
    });
};
