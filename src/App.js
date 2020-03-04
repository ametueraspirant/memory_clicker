import React from 'react';
import Home from './components/routes/Home';
import Game from './components/routes/Game';
import Results from './components/routes/Results';
import match404 from './components/routes/match404';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/memory_clicker" component = {Home} />
        <Route exact path = "/game" component = {Game} />
        <Route exact path = "/results" component = {Results} />
        <Route component = {match404} />
      </Switch>
    </Router>
  );
}

export default App;