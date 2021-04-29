import {Mem} from "./Mem";

const memeTitleRegular = [
    {
        name: "mem1",
        upVote: 0,
        downVote: 0,
        id: "A",
    },
    {
        name: "mem2",
        upVote: 0,
        downVote: 0,
        id: "B",
    },
    {
        name: "mem3",
        upVote: 0,
        downVote: 0,
        id: "C",
    },
    {
        name: "mem4",
        upVote: 0,
        downVote: 0,
        id: "D",
    },
];

const upVoteHandler = (index) => {
    return console.log(memeTitleRegular[index].id);
};

const memDisplayfunction = (array) => {
    return array.map((element, index) => (
        <Mem
            title={element.name}
            upVote={element.upVote}
            downVote={element.downVote}
            upVoteHandler={upVoteHandler()}
            key={element.id}
            // index={index}
        />
    ));
};

export const Regular = () => {
    return <>{memDisplayfunction(memeTitleRegular)}</>;
};
