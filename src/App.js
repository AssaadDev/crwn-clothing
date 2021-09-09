import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Homepage } from "./pages/homepage/Homepage.component.jsx";

const hats = () => (
  <div>
    <h1>HIii</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/ht" component={hats} />
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
