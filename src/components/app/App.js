import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../about/About";
import { ROUTES } from "../../Routes";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.home}>
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
