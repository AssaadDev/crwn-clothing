import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import './header.styles.scss';
import { auth } from "../../firebase/firebase.util";
import { connect } from 'react-redux';
import CardIcon  from "../card-icon/card-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";


const Header = ({currentUser, hidden}) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className='option' to="/shop">Shop</Link>
      <Link className='option' to="#">Contact</Link>
      {
        currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>Sign out</div>
        ):(
          <Link className='option' to="/sign">Sign in</Link>
        )
      }
      <CardIcon />
    </div>
    {
      hidden ? null :<CartDropdown />
    }
    
  </div>
);

const mapStateToProps = ({user: {currentUser} , cart: {hidden}}) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header)