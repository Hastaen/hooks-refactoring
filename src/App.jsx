import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import First from './pages/first';
import Second from './pages/second';
import Third from './pages/third';


class App extends Component {
    render() {
        return (
          <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/first">First lab</Link>
          </li>
          <li>
            <Link to="/second">Second lab</Link>
          </li>
          <li>
            <Link to="/third">Third lab</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <First />
          </Route>
          <Route path="/first">
            <First />
          </Route>
          <Route path="/second">
            <Second />
          </Route>
          <Route path="/third">
            <Third />
          </Route>
        </Switch>
      </div>
    </Router>
            
        );
    }
} 

export default App;
