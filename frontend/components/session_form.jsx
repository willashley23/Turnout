import React from 'react';
import { Link, hashHistory } from 'react-router';
import { login } from '../actions/session_actions';
import { withRouter } from 'react-router';


class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",

      password: "",
      enter: "auto-enter"

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.chooseHeader = this.chooseHeader.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
    this.cancelForm = this.cancelForm.bind(this);

  }

  componentDidUpdate(){
    this.redirectIfLoggedIn();
  }

  componentDidMount() {
    window.setTimeout(() => {
     this.setState({enter: "auto-enter auto-enter-active"});

    }, 0);
  }

  redirectIfLoggedIn(){
    if (this.props.loggedIn){
      hashHistory.push("/home");
    }
  }

  update(field){
    return e => { this.setState({[field]: e.currentTarget.value }); };
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
    this.setState({
      username: "",
      password: ""
    });
  }

  handleGuest(e){
    e.preventDefault();
    if (this.props.route.path === "signup") {
      this.props.router.push('/home/login')
    } 
    const formData = { username: "guest", password: "password"};
    this.setState(formData, ()=> {
      const user = this.state;
      this.props.processForm({user});
    this.setState({
      username: "",
      password: ""
    });
    });
  }

  chooseHeader(e) {
    if (e === "home/signup") {
      return (
        <h2 className="form-title">Sign Up</h2>
      )
    } else {
      return (
        <h2 className="form-title">Log In</h2>
      )
    }
  }


  cancelForm() {
    this.props.resetErrors();
    this.props.router.push("/home")
  }


  navLink(){
    if (this.props.formType === "login") {
      return <Link to="/home/signup">sign up</Link>;
    } else {
      return <Link to="/home/login">log in</Link>;
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
        <form onSubmit={this.handleSubmit} className={"login-form-box "+this.state.enter}>
          <img src= "assets/close.png" className="close-icon" onClick={this.cancelForm} />
          { this.chooseHeader(this.props.formType) }
          <section className="session-errors">{ this.renderErrors() }</section>
          <div className="login-form">
            <br />
            <label className="username">
              <input type="text"
                placeholder= "USERNAME"

                onChange={this.update("username")}
                className="login-input" />
            </label>
            <br />

            <label className="password">
              <input type="password"
                placeholder="PASSWORD"
                onChange={this.update("password")}
                className="login-input" />
            </label>

            <br />
            <input type="submit" value="Submit" className="submitButton"/>
          </div>
          <div className="submit form-section">
            <button onClick={this.handleGuest} className="guest-button">Guest Login</button>
          </div>
        </form>
      </div>
    );
  }

}


export default withRouter(SessionForm);

