import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Homepage } from "./pages/homepage/Homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component";
import { Header } from "./components/header/header.component";
import { SignInOut } from "./pages/sign-in-out/signInOut.component";
import { auth } from "./firebase/firebase.util";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubFromAuth = null;

  componentDidMount() {
    this.unsubFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      //console.log(this.state.currentUser);
    });
  }
  componentWillUnmount() {
    this.unsubFromAuth();
    //console.log(this.state.currentUser);
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/sign" component={SignInOut} />
        </Switch>
      </div>
    );
  }
}

export default App;
