import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import createHistory from 'history/createBrowserHistory'
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import rootReducer from "./redux";

import animalsData from './data/animalsData';
import birdsData from './data/birdsData';

import DinoGrid from "./containers/DinoGridContainer";
import AnimalsGrid from "./containers/AnimalsGridContainer";

import DinoMemoryGame from "./containers/DinoMemoryGameContainer";
import AnimalsMemoryGame from "./containers/AnimalsMemoryGameContainer";
import BirdsMemoryGame from "./containers/BirdsMemoryGameContainer";
import CountingGame from "./containers/CountingGame";

import DinoDetailsCard from "./containers/DinoDetailsCardContainer";
import AnimalDetailsCard from "./containers/AnimalDetailsCardContainer";
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
    animals: animalsData,
    birds: birdsData,
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
          <Route exact path="/" component={DinoGrid} />
          <Route exact path="/animals" component={AnimalsGrid} />
          <Route exact path="/dinos/memory" component={DinoMemoryGame} />
          <Route exact path="/animals/memory" component={AnimalsMemoryGame} />
          <Route exact path="/birds/memory" component={BirdsMemoryGame} />
          <Route exact path="/numbers/counting" component={CountingGame} />
          <Route
            exact
            path="/dinos/:dinoId"
            render={({ match }) => (
              <DinoDetailsCard
                dinoId={match.params.dinoId}
              />
            )}
          />
          <Route
            exact
            path="/animals/:animalId"
            render={({ match }) => (
              <AnimalDetailsCard
                animalId={match.params.animalId}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
