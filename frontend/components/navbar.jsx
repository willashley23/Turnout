import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" activeClassName="current">LOGIN</Link>
    <Link to="/signup" activeClassName="current">SIGN UP</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
 <nav className="login-signup">
    <Link to="/login" className="sign-out" activeClassName="current" onClick={logout}>SIGN OUT</Link>
</nav>
);

function RenderAuthLinks({currentUser, logout}){
  if (currentUser) {
    return (
      <div className="navbar">
      <Link to="/" className="logo">Turnout</Link>
      <section className="sessionLinks">{personalGreeting(currentUser, logout)}</section>
      </div>
      )
  } else {
    return (
      <div className="navbar">
      <Link to="/" className="logo">Turnout</Link>
      <section className="sessionLinks">{sessionLinks()}</section>
      </div>
      )
  }
}

export default RenderAuthLinks;