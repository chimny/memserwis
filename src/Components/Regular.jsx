import {useEffect, useState} from "react";
import {Mem} from "./Mem";

// odpala się od razu funkcja, do sprawdzenia
// const upVoteHandler = (array, index) => {
//     return console.log(array[index].upVote);
// };
// component start
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

    /*     const upVoteHandler = (index) => {
        let counter = 0;
        return setMemeTitleRegular((prevState) => {
            let initialArray = [...prevState];
            if (initialArray[index].upVote > counter) {
                counter++;
                return initialArray;
            } else {
                initialArray[index].upVote++;
                return initialArray;
            }
        });
    }; */

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
            initialArray[index].upVote++;
            return initialArray;
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

    return <>{memDisplayfunction(memeTitleRegular)}</>;
};
