import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main, Posts, Membership } from '../pages';
import AppLayout from '../components/AppLayout';
// import { hot } from "react-hot-loader";


const App = () =>  {

  return (
      <div style={{backgroundColor:"#FAFAFA", height:"100%"}}>
        <AppLayout />
        <Route exact path="/" component={Main}/>
        <Switch>
          <Route path="/membership" component={Membership}/>
        </Switch>
        <Route path="/posts" component={Posts}/>
      </div>
  );
};

// export default  hot(module)(App);
export default  App;