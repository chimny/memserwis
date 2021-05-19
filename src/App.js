import {memDisplayfunction} from "./Functions/functions";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {Hot} from "./Components/Hot";
import {Regular} from "./Components/Regular";
import {AppState} from "./Context/AppState";
import "./App.css";
// due to usecContext
import * as React from "react";

function App() {
    const [memeRegular, setMemeRegular] = useState([
        {
            name: "mem1",
            upVote: 0,
            downVote: 0,
            id: "A",
            hot: false,
        },
        {
            name: "mem2",
            upVote: 0,
            downVote: 0,
            id: "B",
            hot: false,
        },
        {
            name: "mem3",
            upVote: 0,
            downVote: 0,
            id: "C",
            hot: false,
        },
        {
            name: "mem4",
            upVote: 0,
            downVote: 0,
            id: "D",
            hot: false,
        },
    ]);
    /* 
    const [memeHot, setMemeHot] = useState([
        {
            name: "mem5",
            upVote: 13,
            downVote: 0,
            id: "E",
            hot: true,
        },
    ]);

    const memUpdater = () => {
        setMemeHot((prevState) => {
            let currentResult = [...prevState];
            let newMemes = memeRegular.filter(
                (mem) =>
                    mem.hot === true &&
                    mem.upVote + mem.downVote > 5 &&
                    !currentResult.includes(mem)
            );
            let answer = currentResult.concat(newMemes);
            return answer.filter((mem) => mem.upVote + mem.downVote > 5);
        });
    };
    useEffect(memUpdater, [memeRegular]);
    // use context starts
    const CountContext = React.useContext(memeRegular);
    function CountDisplay() {
        const {count} = React.useContext(memeRegular);
        return <div>{count}</div>;
    }

    // use context ends
 */

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
                    <AppState>
                        <Switch>
                            <Route path="/Regular">
                                {/* {memDisplayfunction(memeRegular, setMemeRegular)} */}
                                <Regular />
                            </Route>
                            <Route path="/Hot">
                                <Hot />
                                {/* {memDisplayfunction(memeHot, setMemeHot)} */}
                            </Route>
                        </Switch>
                    </AppState>
                </div>
            </Router>
        </div>
    );
}

export default App;
