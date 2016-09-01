import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/home/login" activeClassName="current">LOGIN</Link>
    <Link to="/home/signup" activeClassName="current">SIGN UP</Link>
  </nav>
);


const personalGreeting = (currentUser, logout) => (
 <nav className="login-signup">
    <Link to="/home/login" className="sign-out" activeClassName="current" onClick={logout}>SIGN OUT</Link>
    <Link to="/events/new" className="create-event" activeClassName="current">CREATE EVENT</Link>
    <Link to={`/users/${currentUser.id}`} className="user-profile-link" activeClassName="current">MY PROFILE</Link>
</nav>

);

function RenderAuthLinks({currentUser, logout}){
  if (currentUser) {
    return (
      <div className="navbar">
      <Link to="/home" className="logo">Turnout</Link>
      <section className="sessionLinks">{personalGreeting(currentUser, logout)}</section>
      </div>
      )
  } else {
    return (
      <div className="navbar">
      <Link to="/home" className="logo">Turnout</Link>
      <section className="sessionLinks">{sessionLinks()}</section>
      </div>
      )
  }
}

export default RenderAuthLinks;