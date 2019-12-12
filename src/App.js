/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import Routes from './routes/Routes';
import dashboardReducer from './store/reducers/dashboardReducer'

// Combine all reducers
const rootReducer = combineReducers({
  dashboard: dashboardReducer
});

// Logger for dispatching
const logger = state => {
  return next => {
    return action => {
      console.log("Middleware dispatching", action);
      const result = next(action);
      console.log("[MiddleWare next state]", state.getState());
      return result;
    };
  };
};

// Redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store instance
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
