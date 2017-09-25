import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux";

import dinoData from "./data/dinoData.js";
import DinoGrid from "./containers/DinoGridContainer";
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

const store = createStore(rootReducer, { dinos: dinoData, filters: {} });

store.dispatch = addLoggingToDispatch(store);

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Navigation />
        <Route exact path="/dinos" component={DinoGrid} />
        <Route
          exact
          path="/dino/:dinoName"
          render={({ match }) => (
            <DinoDetailsCard
              dino={
                dinoData.filter(dino => dino.name === match.params.dinoName)[0]
              }
            />
          )}
        />
        <Route path="/about" render={() => <h1>About</h1>} />
        <Route path="/contact" render={() => <h1>Contact</h1>} />
      </div>
    </Router>
  </Provider>
);

export default App;
