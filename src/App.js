import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Rotas from './routes';
import Header from './components/Header';
import history from "./Services/history";
import store from './Store'


function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Rotas />
      </Router>
    </Provider>
  );
}


export default App;
