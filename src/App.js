import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Hot} from "./Components/Hot";
import {Regular} from "./Components/Regular";
import {AppState} from "./Context/AppState";
import "./Styles/App.css";
import * as React from "react";

import SideNav, {
    Toggle,
    Nav,
    NavItem,
    NavIcon,
    NavText,
} from "@trendmicro/react-sidenav";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

function App() {
    return (
        <div className="App">
            {/* <Router>
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
            </Router> */}

            {/* new menu below */}
            <Router>
                <AppState>
                    <Route
                        render={({location, history}) => (
                            <React.Fragment>
                                <SideNav
                                    onSelect={(selected) => {
                                        const to = "/" + selected;
                                        if (location.pathname !== to) {
                                            history.push(to);
                                        }
                                    }}
                                >
                                    <SideNav.Toggle />
                                    <SideNav.Nav defaultSelected="Regular">
                                        <NavItem eventKey="Regular">
                                            <NavIcon>
                                                <i
                                                    className="fa fa-fw fa-home"
                                                    style={{fontSize: "1.75em"}}
                                                />
                                            </NavIcon>
                                            <NavText>Regular</NavText>
                                        </NavItem>
                                        <NavItem eventKey="Hot">
                                            <NavIcon>
                                                <i
                                                    className="fa fa-fw fa-device"
                                                    style={{fontSize: "1.75em"}}
                                                />
                                            </NavIcon>
                                            <NavText>Hot</NavText>
                                        </NavItem>
                                    </SideNav.Nav>
                                </SideNav>
                                <main>
                                    <Route
                                        path="/Regular"
                                        component={(props) => <Regular />}
                                    />
                                    <Route
                                        path="/Hot"
                                        component={(props) => <Hot />}
                                    />
                                </main>
                            </React.Fragment>
                        )}
                    />
                </AppState>
            </Router>
        </div>
    );
}

export default App;
