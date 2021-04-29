import {Mem} from "./Mem";

const memeTitleRegular = [
    "mem1",
    "mem2",
    "mem3",
    "mem4",
    "mem5",
    "mem6",
    "mem7",
    "mem8",
    "mem9",
    "mem10",
    "mem11",
];

const memDisplayfunction = (array) => {
    return array.map((element) => <Mem title={element} />);
};

export const Regular = () => {
    return <>{memDisplayfunction(memeTitleRegular)}</>;
};
