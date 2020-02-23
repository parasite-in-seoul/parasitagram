import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Membership } from 'pages';
import Menu from 'components/Menu';

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