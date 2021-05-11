import {Regular} from "./Components/Regular";
import {Hot} from "./Components/Hot";
import {Mem} from "./Components/Mem";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {useState} from "react";
import "./App.css";

function App() {
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
            id: "E",
        },
        {
            name: "mem2Hot",
            upVote: 0,
            downVote: 0,
            id: "F",
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
        <div className="App">
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/Regular">Regular</Link>
                            </li>
                            <li>
                                <Link to="/Hot">Hot</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/Regular">
                            {memDisplayfunction(
                                memeTitleRegular,
                                setMemeTitleRegular
                            )}
                        </Route>
                        <Route path="/Hot">
                            {memDisplayfunction(memeHot, setMemeHot)}
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
