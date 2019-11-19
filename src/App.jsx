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
import Fourth from './pages/fourth';


class App extends Component {
    render() {
        return (
          <Router>
            <div>
              <ul>
                <li>
                  <Link to="/first">First lab</Link>
                </li>
                <li>
                  <Link to="/second">Second lab</Link>
                </li>
                <li>
                  <Link to="/third">Third lab</Link>
                </li>
                <li>
                  <Link to="/fourth">Fourth lab</Link>
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
                <Route path="/fourth">
                  <Fourth />
                </Route>
              </Switch>
            </div>
          </Router>
        );
    }
} 

export default App;
