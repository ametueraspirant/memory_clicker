import React from 'react';
import Home from './components/routes/Home';
import Game from './components/routes/Game';
import Results from './components/routes/Results';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/results" component={Results} />
      </Switch>
    </Router>
  );
}

export default App;