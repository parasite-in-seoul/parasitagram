import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../shared/App';
import { Provider } from 'react-redux';
import store from './store';
import { hot } from 'react-hot-loader';

const Root = () => (
  <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
);

export default hot(module)(Root);