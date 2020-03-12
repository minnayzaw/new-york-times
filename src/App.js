import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route
            exact
            path="/article/:id"
          >
            <Details />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
