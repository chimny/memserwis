import {Mem} from "../Components/Mem";

export const upVoteHandler = (index, hookReference) => {
    return hookReference((prevState) => {
        let initialArray = [...prevState];
        initialArray[index].upVote++;
        return initialArray;
    });
};

// przy użyciu map
// nie przekazywać hookreference
// unikać nazw generycznych (trudniej o kontekst, czytanie kodu)
export const downVoteHandler = (index, hookReference) => {
    return hookReference((prevState) => {
        let initialArray = [...prevState];
        initialArray[index].downVote--;
        return initialArray;
    });
};

// zmienić na dużą literę
// w przypadku id znika problem z indeksami.
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
                imgSRC={element.imgSRC}
            />
        );
    });
};
