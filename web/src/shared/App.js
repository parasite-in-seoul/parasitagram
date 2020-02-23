import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, membership } from 'pages';
import Menu from 'components/Menu';
import { Membership } from '../pages';

class App extends Component {
  render() {
    return (
      <div>
        <Menu/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/membership" component={Membership}/>
        </Switch>
      </div>
    );
  }
}

export default App;