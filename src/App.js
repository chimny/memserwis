import * as React from "react";

import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";

// Routes
import {Hot} from "./Components/Routes/Hot";
import {Regular} from "./Components/Routes/Regular";
import {Star} from "./Components/Routes/Star";
import {MemCreator} from "./Components/Routes/MemCreator";
import {PageNotFound} from "./Components/Routes/PageNotFound";
// State
import {AppState} from "./Context/AppState";
// Styles
import {GlobalStyle} from "./GlobalStyles/GlobalStyle";
import {Navigation} from "./Components/Navigation/Navigation";
import {ThemeProvider} from "styled-components";
import {theme} from "./GlobalStyles/theme";

function App() {
    return (
        <div className="App">
            <AppState>
                <ThemeProvider theme={theme}>
                    <Router>
                        <Navigation />
                        <div>
                            <Switch>
                                <Route path={"/regular"}>
                                    <Regular />
                                </Route>
                                <Route path={"/hot"}>
                                    <Hot />
                                </Route>
                                <Route path={"/star"}>
                                    <Star />
                                </Route>
                                <Route exact path={"/"}>
                                    {/* <Redirect to={"/regular"} /> */}
                                    <Regular />
                                </Route>
                                <Route path={"/memCreator"}>
                                    <MemCreator />
                                </Route>
                                <Route path="*">
                                    <PageNotFound />
                                </Route>
                            </Switch>
                        </div>
                    </Router>

                    <GlobalStyle />
                </ThemeProvider>
            </AppState>
        </div>
    );
}

export default App;
