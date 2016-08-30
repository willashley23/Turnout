import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" activeClassName="current">Login</Link>
    <Link to="/signup" activeClassName="current">Sign up</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
 <div>
    <h2>Welcome, {currentUser.username}</h2>
    <button className="headbutton" onClick={logout}>Log Out</button>
</div>
);

function Navbar({currentUser, logout}){
  if (currentUser) {
    return personalGreeting(currentUser, logout);
  } else {
    return sessionLinks();
  }
}

export default Navbar;