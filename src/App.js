import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Homepage } from "./pages/homepage/Homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component";
import { Header } from "./components/header/header.component";
import { SignInOut } from "./pages/sign-in-out/signInOut.component";

function App() {
  return (
    <div>
    <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/sign" component={SignInOut} />
      </Switch>
    </div>
  );
}

export default App;
