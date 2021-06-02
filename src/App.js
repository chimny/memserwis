import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Hot} from "./Components/Hot";
import {Regular} from "./Components/Regular";
import {AppState} from "./Context/AppState";
import "./Styles/App.css";
import * as React from "react";

function App() {
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
                    <div className="memes">
                        <AppState>
                            <Switch>
                                <Route path="/Regular">
                                    <Regular />
                                </Route>
                                <Route path="/Hot">
                                    <Hot />
                                </Route>
                            </Switch>
                        </AppState>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default App;
