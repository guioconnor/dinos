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

const store = createStore(rootReducer, { dinos: dinoData });

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
