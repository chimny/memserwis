import {useEffect, useState} from "react";
import {Mem} from "./Mem";

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
    ]);

    const upVoteHandler = (index) => {
        return setMemeTitleRegular((prevState) => {
            [...prevState][index].upVote++;
            alert([...prevState][index].upVote);
            return [...prevState];
        });
    };

    useEffect(() => {
        return memDisplayfunction(memeTitleRegular);
    }, [memeTitleRegular]);

    const memDisplayfunction = (array) => {
        return array.map((element, index) => (
            <Mem
                title={element.name}
                upVote={element.upVote}
                downVote={element.downVote}
                upVoteHandler={upVoteHandler}
                key={element.id}
                index={index}
            />
        ));
    };

    return <>{memDisplayfunction(memeTitleRegular)}</>;
};
