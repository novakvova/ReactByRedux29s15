import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";

import Counter from "./components/Counter";
import CounterDecrement from "./components/CounterDecrement";
import GamesPage from "./components/GamesPage";
import CounterPage from "./components/CounterPage";

import NavigationBar from "./NavigationBar";

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />

        <Route exact path='/counter' component={Counter} />
        <Route exact path='/counterdec' component={CounterDecrement} />
        <Route exact path='/counterpage' component={CounterPage} />
        <Route exact path='/games' component={GamesPage} />
      </div>
    );
  }
}

export default App;
