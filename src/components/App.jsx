import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers/reducers';

import MySammies from './MySammies/MySammies';
import GameTable from './GameTable/GameTable';
import '../scss/App.scss';

const localStorageMiddleware = function writeStateToLocalStorage({ getState }) {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem('appState', JSON.stringify(getState()));
    return result;
  };
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(localStorageMiddleware, logger)),
);

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <GameTable />
        <MySammies />
      </Provider>
    </div>
  );
}
