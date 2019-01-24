import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";

import Counter from "./components/Counter";
import CounterDecrement from "./components/CounterDecrement";


class App extends Component {
  render() {
    return (
      <div>
        <Link to='/counter'>Лічильник ++</Link>
        <br/>
        <Link to='/counterdec'>Лічильник --</Link>

        <Route exact path='/counter' component={Counter} />
        <Route exact path='/counterdec' component={CounterDecrement} />
      </div>
    );
  }
}

export default App;
