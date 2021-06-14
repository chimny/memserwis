import * as React from "react";

import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch,
    Redirect,
} from "react-router-dom";
import {Hot} from "./Components/Hot";
import {Regular} from "./Components/Regular";
import {Star} from "./Components/Star";
import {MemCreator} from "./Components/MemCreator";
import {PageNotFound} from "./Components/PageNotFound";
import {AppState} from "./Context/AppState";
import {GlobalStyle, Navigation, Wrapper, activeTab} from "./Styles/Style";

function App() {
    return (
        <div className="App">
            <Router>
                <AppState>
                    <Wrapper>
                        <Navigation>
                            <ul>
                                <li>
                                    <NavLink
                                        to="/regular"
                                        activeStyle={activeTab}
                                    >
                                        Regular
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/hot" activeStyle={activeTab}>
                                        Hot
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/star" activeStyle={activeTab}>
                                        Star
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/memCreator"
                                        activeStyle={activeTab}
                                    >
                                        memCreator
                                    </NavLink>
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
                                <Route path="/star">
                                    <Star />
                                </Route>
                                <Route exact path="/">
                                    <Redirect to="/regular" />
                                </Route>
                                <Route path="/memCreator">
                                    <MemCreator />
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
