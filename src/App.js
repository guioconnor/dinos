import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import dinoData from "./data/dinoData.js";
import DinoGrid from "./components/organisms/DinoGrid";
import DinoDetailsCard from "./components/organisms/DinoDetailsCard";
import Navigation from "./components/organisms/Navigation";

import mainIllustration from "./img/main-illustration.jpg";
import "./App.css";

const DinoGridContainer = () => (
  <DinoGrid dinoData={dinoData} mainIllustration={mainIllustration} />
);

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Route exact path="/dinos" component={DinoGridContainer} />
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
);

export default App;
