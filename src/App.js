import * as React from "react";

import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import {Hot} from "./Components/Hot";
import {Regular} from "./Components/Regular";
import {AppState} from "./Context/AppState";
import {GlobalStyle} from "./Styles/Style";

function App() {
    return (
        <div className="App">
            <Router>
                <AppState>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/regular">Regular</Link>
                            </li>
                            <li>
                                <Link to="/hot">Hot</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/regular">
                            <Regular />
                        </Route>
                        <Route path="/hot">
                            <Hot />
                        </Route>
                        <Route path="/">
                            <Regular />
                        </Route>
                    </Switch>
                </AppState>
            </Router>
            <GlobalStyle />
        </div>
    );
}

export default App;
