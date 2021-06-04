import * as React from "react";

import {BrowserRouter as Router, Route} from "react-router-dom";
import {Hot} from "./Components/Hot";
import {Regular} from "./Components/Regular";
import {AppState} from "./Context/AppState";
import "./Styles/App.css";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFire, faHome} from "@fortawesome/free-solid-svg-icons";

import SideNav, {
    Toggle,
    Nav,
    NavItem,
    NavIcon,
    NavText,
} from "@trendmicro/react-sidenav";

function App() {
    return (
        <div className="App">
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
                                                <FontAwesomeIcon
                                                    icon={faHome}
                                                />
                                            </NavIcon>
                                            <NavText>Regular</NavText>
                                        </NavItem>
                                        <NavItem eventKey="Hot">
                                            <NavIcon>
                                                <FontAwesomeIcon
                                                    icon={faFire}
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
