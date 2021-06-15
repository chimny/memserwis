import * as React from "react";

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect,
} from "react-router-dom";
// Routes
import { Hot } from "./Components/Routes/Hot";
import { Regular } from "./Components/Routes/Regular";
import { Star } from "./Components/Routes/Star";
import { MemCreator } from "./Components/Routes/MemCreator";
import { PageNotFound } from "./Components/Routes/PageNotFound";
// State
import { AppState } from "./Context/AppState";
// Styles
import { GlobalStyle, Navigation, Wrapper } from "./Styles/Style";
import { Burger } from "./Styles/Burger/StyledBurger";
import { ThemeProvider } from "styled-components";
import { theme } from "./Styles/theme";

function App() {
  return (
    <div className="App">
      <AppState>
        <ThemeProvider theme={theme}>
          <Burger />
          <Router>
            <Wrapper>
              <Navigation>
                <ul>
                  <li>
                    <NavLink to="/regular" activeClassName="active">
                      Regular
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/hot" activeClassName="active">
                      Hot
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/star" activeClassName="active">
                      Star
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/memCreator" activeClassName="active">
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
          </Router>
          <GlobalStyle />
        </ThemeProvider>
      </AppState>
    </div>
  );
}

export default App;
