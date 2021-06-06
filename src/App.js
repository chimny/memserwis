import * as React from "react";
import "./Styles/style.css";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import {Hot} from "./Components/Hot";
import {Regular} from "./Components/Regular";
import {AppState} from "./Context/AppState";
import {GlobalStyle, Navigation, Wrapper} from "./Styles/Style";

function App() {
    return (
        <div className="App">
            <Router>
                <AppState>
                    <Wrapper>
                        <Navigation>
                            <ul>
                                <li>
                                    <Link to="/regular">Regular</Link>
                                </li>
                                <li>
                                    <Link to="/hot">Hot</Link>
                                </li>
                            </ul>
                        </Navigation>

                        <Switch>
                            <Route path="/regular">
                                <Regular />
                            </Route>
                            <Route path="/hot">
                                <Hot />
                            </Route>
                            {/* dodać redirect + dodać 404 */}
                            <Route path="/">
                                <Regular />
                            </Route>
                        </Switch>
                    </Wrapper>
                </AppState>
            </Router>
            <GlobalStyle />
        </div>
    );
}

export default App;
