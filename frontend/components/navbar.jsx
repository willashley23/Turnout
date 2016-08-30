import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" activeClassName="current">LOGIN</Link>
    <Link to="/signup" activeClassName="current">SIGN UP</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
 <div>
    
    <Link to="/login" activeClassName="current" onClick={logout}>SIGN OUT</Link>
</div>
);

function RenderAuthLinks({currentUser, logout}){
  if (currentUser) {
    return (
      <div className="navbar">
      <section className="logo">Turnout</section>
      <section className="sessionLinks">{personalGreeting(currentUser, logout)}</section>
      </div>
      )
  } else {
    return (
      <div className="navbar">
      <section className="logo">Turnout</section>
      <section className="sessionLinks">{sessionLinks()}</section>
      </div>
      )
  }
}

export default RenderAuthLinks;