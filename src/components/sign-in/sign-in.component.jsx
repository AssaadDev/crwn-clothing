import React from "react";
import { FormInput } from "../form-input/form-input.component";
import "./sign-in.style.scss";
import { CustomButton } from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.util";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {email, password} = this.state;

    try{
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    }catch(error){
      console.log(error);
    }


    
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span className="title">Sign in with your email and address</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />

          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            label="password"
            value={this.state.password}
            required
          />

          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogle>
              Sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
