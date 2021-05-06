import {useState} from "react";
import {Mem} from "./Mem";

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
            name: "mem4",
            upVote: 0,
            downVote: 0,
            id: "D",
        },
    ]);

    const upVoteHandler = (index) => {
        return setMemeTitleRegular((prevState) => {
            let initialArray = [...prevState];
            initialArray[index].upVote++;
            return initialArray;
        });
    };

    const downVoteHandler = (index) => {
        return setMemeTitleRegular((prevState) => {
            let initialArray = [...prevState];
            initialArray[index].downVote--;
            return initialArray;
        });
    };

    return <>{memDisplayfunction(memeTitleRegular)}</>;
};
