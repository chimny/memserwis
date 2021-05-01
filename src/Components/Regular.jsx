import {useState} from "react";
import {Mem} from "./Mem";

// odpala się od razu funkcja, do sprawdzenia
const upVoteHandler = (array, index) => {
    return console.log(array[index].upVote);
};

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

    // odpala się od razu funkcja, do sprawdzenia
    const upVoteHandler = (array, index) => {
        setMemeTitleRegular((prevState) => {
            return {...prevState};
        });
    };

    const memDisplayfunction = (array) => {
        return array.map((element, index) => (
            <Mem
                title={element.name}
                upVote={element.upVote}
                downVote={element.downVote}
                upVoteHandler={upVoteHandler}
                key={element.id}
                index={index}
                array={memeTitleRegular}
            />
        ));
    };
    // // tbc
    // const [mems, setMems] = useState(null);
    return <>{memDisplayfunction(memeTitleRegular)}</>;
};
