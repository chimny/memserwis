import {StyledRoute} from "../../Components/Routes/StyledRoute";
import {Mem} from "../Mem/Mem";
import {useSelector} from "react-redux";

export const Star = () => {
    const count = useSelector((state) => state.valueObject);
    const filteredValues = count.filter((element) => element.star);

    return (
        <StyledRoute>
            {filteredValues.map((mem) => {
                const {name, downVote, upVote, id, imgSRC, star} = mem;
                return (
                    <Mem
                        title={name}
                        upVote={upVote}
                        downVote={downVote}
                        id={id}
                        key={id}
                        imgSRC={imgSRC}
                        star={star}
                    />
                );
            })}
        </StyledRoute>
    );
};
