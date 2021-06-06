import * as React from "react";

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
} from "react-router-dom";
import {Hot} from "./Components/Hot";
import {Regular} from "./Components/Regular";
import {PageNotFound} from "./Components/PageNotFound";
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
                        <div>
                            <Switch>
                                <Route path="/regular">
                                    <Regular />
                                </Route>
                                <Route path="/hot">
                                    <Hot />
                                </Route>
                                <Route exact path="/">
                                    <Redirect to="/regular" />
                                </Route>
                                <Route path="*">
                                    <PageNotFound />
                                </Route>
                            </Switch>
                        </div>
                    </Wrapper>
                </AppState>
            </Router>
            <GlobalStyle />
        </div>
    );
}

export default App;
