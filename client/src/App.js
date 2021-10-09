import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainPage from './components/MainPage';
import OutputSide from './components/OutputSide';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/result"
          component={(props) => <OutputSide {...props} />}
        />
        <Route
          path="/"
          component={(props) => <MainPage {...props} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
