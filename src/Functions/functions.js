import {Mem} from "../Components/Mem";

export const upVoteHandler = (index, hookReference) => {
    return hookReference((prevState) => {
        let initialArray = [...prevState];
        initialArray[index].upVote++;
        return initialArray;
    });
};

export const downVoteHandler = (index, hookReference) => {
    return hookReference((prevState) => {
        let initialArray = [...prevState];
        initialArray[index].downVote--;
        return initialArray;
    });
};

export const memDisplayfunction = (array, hookReference) => {
    return array.map((element, index) => (
        <Mem
            title={element.name}
            upVote={element.upVote}
            downVote={element.downVote}
            upVoteHandler={() => upVoteHandler(index, hookReference)}
            key={element.id}
            index={index}
            downVoteHandler={() => downVoteHandler(index, hookReference)}
        />
    ));
};
