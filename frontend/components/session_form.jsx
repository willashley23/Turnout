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
          Please { this.props.formType } or { this.navLink() }
          { this.renderErrors() }
          <div className="login-form">
            <br />
            <label> Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update("username")}
                className="login-input" />
            </label>

            <br />
            <label> Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input" />
            </label>

            <br />
            <input type="submit" value="Submit" />
          </div>
          <div className="submit form-section">
            <button onClick={this.handleDemo}>Guest Login</button>
          </div>
        </form>
      </div>
    );
  }

}

export default SessionForm;