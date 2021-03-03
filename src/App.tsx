import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Characters from './views/Characters'

import Locations from './views/Locations'

import Episodes from './views/Episodes'

function App() {
  return (
    <Router>
      <div >
        <Switch>
          <Route path="/Locations">
            <Locations />
          </Route>
          <Route path="/Episodes">
            <Episodes />
          </Route>
          <Route path="/">
            <Characters />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
