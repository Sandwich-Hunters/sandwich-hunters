import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import rootReducer from '../../reducers/reducers';
import GameTable from './GameTable';
import '../../scss/App.scss';

const localStorageMiddleware = function writeStateToLocalStorage({ getState }) {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem('appState', JSON.stringify(getState()));
    return result;
  };
};

const store = createStore(
  rootReducer,
  applyMiddleware(localStorageMiddleware, logger),
);

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <GameTable />
      </Provider>
    </div>
  );
}
