import React from 'react';
import { Link, hashHistory } from 'react-router';
import { login } from '../actions/session_actions'

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(){
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn(){
    if (this.props.loggedIn){
      hashHistory.push("/");
    }
  }

  update(field){
    return e => { this.setState({[field]: e.currentTarget.value }); };
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

   handleGuest(e){
    e.preventDefault();
    const formData = { username: "guest", password: "password" };
    this.setState(formData);
    this.props.processForm({user});
  }


  navLink(){
    if (this.props.formType === "login") {
      return <Link to="/signup">sign up</Link>;
    } else {
      return <Link to="/login">log in</Link>;
    }
  }

  renderErrors(){
    return(
      <ul>
        {this.props.errors.map( (error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          { this.renderErrors() }
          <div className="login-form">
            <br />
            <label className="username"> USERNAME
              <input type="text"
                value={this.state.username}
                onChange={this.update("username")}
                className="login-input" />
            </label>

            <br />
            <label className="password"> PASSWORD
              <input type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input" />
            </label>

            <br />
            <input type="submit" value="Submit" className="submitButton"/>
          </div>
          <div className="submit form-section">
            <button onClick={this.handleGuest}>Guest Login</button>
          </div>
        </form>
      </div>
    );
  }

}

export default SessionForm;