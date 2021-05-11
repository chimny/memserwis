import {memDisplayfunction} from "./Functions/functions";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {useState} from "react";
import "./App.css";

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

    const [memeHot, setMemeHot] = useState([
        {
            name: "mem1Hot",
            upVote: 0,
            downVote: 0,
            id: "E",
            hot: true,
        },
        {
            name: "mem2Hot",
            upVote: 0,
            downVote: 0,
            id: "F",
            hot: false,
        },
    ]);

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
                            {memDisplayfunction(memeRegular, setMemeRegular)}
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
