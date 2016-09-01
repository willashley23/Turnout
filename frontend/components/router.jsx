import React from 'react';
//Router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
//Components
import App from './app';
import HomeContainer from './home_container';
import SessionFormContainer from './session_form_container';
import EventIndexContainer from './event_index_container';
import EventDetailViewContainer from './event_detail_view_container';
import NewEventFormContainer from './new_event_form_container';
import UserContainer from './user_container';


class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
    this._redirectToHome = this._redirectToHome.bind(this);
  }

  _ensureLoggedIn(nextState, replace){
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
      console.log("stuff")
    if (!currentUser) {
      replace('/login');
    }
  }

  _redirectIfLoggedIn(nextState, replace){
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  _redirectToHome(nextState, replace) {
    if(location.hash[2] === '?') {
      replace('/home');
    }
  }

  render(){
    return(
      <Router history={ hashHistory }>
        <Route  path="/" component={ App } onEnter={this._redirectToHome}>
          <Route path= "home" component={ HomeContainer } >
            <Route path="login" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn}/>
            <Route path="signup" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn}/>
          </Route>
            <Route path="events/new" component={ NewEventFormContainer } />
            <Route path="events/:id" component={ EventDetailViewContainer } />
            <Route path="users/:id" component={ UserContainer } />
        </Route>
      </Router>
    );
  }
}

AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default AppRouter;