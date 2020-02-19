import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About } from 'pages';
import Menu from 'components/Menu';

class App extends Component {
  render() {
    return (
      <div>
        <Menu/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </Switch>
      </div>
    );
  }
}

export default App;