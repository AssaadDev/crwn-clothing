import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Homepage } from "./pages/homepage/Homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import { SignInOut } from "./pages/sign-in-out/signInOut.component";
import { auth, creatUserProfDoc } from "./firebase/firebase.util";
import { connect } from "react-redux";
import { setCurrntUser } from "./redux/user/user.actions";

class App extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     currentUser: null,
  //   };
  // }

  unsubFromAuth = null;

  componentDidMount() {
const {setCurrntUser}= this.props;

    this.unsubFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await creatUserProfDoc(user);

        userRef.onSnapshot((snapShot) => {
          // this.setState({
          //   currentUser: {
          //     id: snapShot.id,
          //     ...snapShot.data(),
          //   },
          // });

          setCurrntUser({
            id: snapShot.id,
            ...snapShot.data(),
          });

          console.log(this.state);
        });
      } else {
        setCurrntUser(user);
      }

      //creatUserProfDoc(user);

      //this.setState({ currentUser: user });
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
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/sign" component={SignInOut} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrntUser: (user) => dispatch(setCurrntUser(user)),
});
export default connect(null, mapDispatchToProps)(App);
