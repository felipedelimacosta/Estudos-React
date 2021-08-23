import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/header';

import store from './store/index';

import Routes from './routes';
import history from './services/history';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
