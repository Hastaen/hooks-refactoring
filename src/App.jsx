import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import First from './pages/first';
import Second from './pages/second'

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
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <First />
          </Route>
          <Route path="/first">
            <First />
          </Route>
          <Route path="/first">
            <First />
          </Route>
        </Switch>
      </div>
    </Router>
            
        );
    }
} 

export default App;
