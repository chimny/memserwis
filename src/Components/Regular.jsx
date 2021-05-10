import {useState} from "react";
import {Mem} from "./Mem";
import {Hot} from "./Hot";

export const Regular = () => {
    const [memeTitleRegular, setMemeTitleRegular] = useState([
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
    ]);

    const [memeHot, setMemeHot] = useState([
        {
            name: "mem1Hot",
            upVote: 0,
            downVote: 0,
            id: "A",
        },
        {
            name: "mem2Hot",
            upVote: 0,
            downVote: 0,
            id: "B",
        },
    ]);

    const upVoteHandler = (index, hookReference) => {
        return hookReference((prevState) => {
            let initialArray = [...prevState];
            initialArray[index].upVote++;
            return initialArray;
        });
    };

    const downVoteHandler = (index, hookReference) => {
        return hookReference((prevState) => {
            let initialArray = [...prevState];
            initialArray[index].downVote--;
            return initialArray;
        });
    };

    const memDisplayfunction = (array, hookReference) => {
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

    return (
        <>
            {memDisplayfunction(memeTitleRegular, setMemeTitleRegular)}
            {memDisplayfunction(memeHot, setMemeHot)}
        </>
    );
};
