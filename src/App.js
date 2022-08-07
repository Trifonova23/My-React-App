import "./App.css";
// import { Route } from "react-router-dom";
import { Home } from "./Views/Home/Home.jsx";
import { Contact } from "./Views//Contact/Contact.jsx";
import { About } from "./Views/About/About.jsx";

import React from "react";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/Contact">
        <Contact />
      </Route>
      <Route exact path="/About">
        <About />
      </Route>
    </Switch>
  );
}

export default App;
