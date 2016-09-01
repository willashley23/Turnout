import { connect } from 'react-redux';
import SessionForm from './session_form';

import { login, logout, signup, clearErrors } from '../actions/session_actions';



const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'home/login') ? login : signup;
  const resetErrors = () => { dispatch(clearErrors()) };

  return {
    processForm: user => dispatch(processForm(user)),
    resetErrors,
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);