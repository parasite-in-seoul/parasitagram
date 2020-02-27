import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts, Membership } from '../pages';
import AppLayout from '../components/AppLayout';
import { hot } from "react-hot-loader";


class App extends Component {
  render() {
    return (
      <div>
        <AppLayout/>
        <Route exact path="/" component={Home}/>
        <Switch>
          <Route path="/about/:name" component={About}/>
          <Route path="/about" component={About}/>
          <Route path="/membership" component={Membership}/>
        </Switch>
        <Route path="/posts" component={Posts}/>
      </div>
    );
  }
}

export default  hot(module)(App);