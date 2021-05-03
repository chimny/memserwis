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
    ]);

    const upVoteHandler = (index) => {
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
    };

    useEffect(() => {
        document.title = `${memeTitleRegular[0].upVote}`;
    });

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
