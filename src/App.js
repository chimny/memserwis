import {Regular} from "./Components/Regular";
import {Hot} from "./Components/Hot";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <nav>
                        <ul>
                            {/* <li>
                                <Link exact to="/">
                                    Home
                                </Link>
                            </li> */}
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
                            <Regular />
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
