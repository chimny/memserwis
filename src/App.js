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

    const memDisplayfunction = (array) => {
        return array.map((element, index) => (
            <Mem
                title={element.name}
                upVote={element.upVote}
                downVote={element.downVote}
                upVoteHandler={upVoteHandler}
                key={element.id}
                index={index}
                downVoteHandler={downVoteHandler}
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
                            <Regular
                                memDisplayfunction={() =>
                                    memDisplayfunction(memeTitleRegular)
                                }
                            />
                        </Route>
                        <Route path="/Hot">
                            <Hot />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
