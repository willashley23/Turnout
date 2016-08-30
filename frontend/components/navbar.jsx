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
    
    <Link to="/login" activeClassName="current" onClick={logout}>Sign out</Link>
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