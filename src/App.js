import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux";

import dinoData from "./data/dinoData.js";
import DinoGrid from "./containers/DinoGridContainer";
import MemoryGame from "./containers/MemoryGameContainer";
import DinoDetailsCard from "./components/organisms/DinoDetailsCard";
import Navigation from "./components/organisms/Navigation";

import "./App.css";

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

const store = createStore(
  rootReducer,
  {
    dinos: dinoData.filter(dino => !!dino.image),
    filters: {}
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch = addLoggingToDispatch(store);

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/dinos" component={DinoGrid} />
          <Route exact path="/dinos/memory" component={MemoryGame} />
          <Route
            exact
            path="/dinos/:dinoName"
            render={({ match }) => (
              <DinoDetailsCard
                dino={
                  dinoData.filter(dino => dino.name === match.params.dinoName)[0]
                }
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
