import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import createHistory from 'history/createBrowserHistory'
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import rootReducer from "./redux";

import dinoData from "./data/dinoData.js";
import animalsData from './data/animalsData';

import DinoGrid from "./containers/DinoGridContainer";
import DinoMemoryGame from "./containers/DinoMemoryGameContainer";
import DinoDetailsCard from "./containers/DinoDetailsCardContainer";
import Navigation from "./components/organisms/Navigation";

import { initializeAnalitics, logPageView } from "./lib/analytics";

import "./App.css";

// Initialize Google Analytics
initializeAnalitics('UA-107421412-1');
logPageView(window.location);

const history = createHistory();
history.listen((location, action) => {
  logPageView(window.location);
});

const addLoggingToDispatch = store => {
  const next = store.dispatch;
  if (!console.group) {
    return next;
  }

  return action => {
    console.group(action.type);
    console.log("%c prev state", "color: gray", store.getState());
    console.log("%c action", "color: blue", action);

    const returnValue = next(action);

    console.log("%c next state", "color: green", store.getState());
    console.groupEnd(action.type);
    return returnValue;
  };
};

const middleware = [
  thunk,
]

const store = createStore(
  rootReducer,
  {
    dinos: Object.keys(dinoData)
      .filter(dinoId => !!dinoData[dinoId].image)
      .map(dinoId => dinoData[dinoId])
      .reduce((dinoData, dino) => {
        return {
          ...dinoData,
          [dino.dinoId]: dino,
        }
      }, {}),
    animals: animalsData,
    filters: {}
  },
  composeWithDevTools(applyMiddleware(...middleware))
);

store.dispatch = addLoggingToDispatch(store);

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/dinos" component={DinoGrid} />
          <Route exact path="/dinos/memory" component={DinoMemoryGame} />
          <Route
            exact
            path="/dinos/:dinoId"
            render={({ match }) => (
              <DinoDetailsCard
                dinoId={match.params.dinoId}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
