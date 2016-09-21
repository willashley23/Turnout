import React from 'react';
import { withRouter } from 'react-router';

class TicketModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1,
      enter: "auto-enter"
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancelForm = this.cancelForm.bind(this);
  }

  componentDidMount() {
    window.setTimeout(() => {
     this.setState({enter: "auto-enter auto-enter-active"});
    }, 0);
  }

  handleSubmit() {
    for (var i = this.state.count; i > 0; i--) {
      this.props.createTicket(this.props.eventId)
    }
    this.props.router.push(`/users/${currentUser.id}`);
  }

  cancelForm() {
    this.props.router.push(`events/${this.props.eventId}`)
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  render() {
    return (
      <div className="modal-wrapper">
      <div  className="ticket-modal-container">
        <form onSubmit={this.handleSubmit} className={"ticket-form-box " + this.state.enter}>
          <img src= "assets/close.png" className="close-icon" onClick={this.cancelForm} />
          <h2 className="ticket-form-header">Buy Tickets</h2>
          <div className="ticket-icon-container">
            <img src="assets/tickets.png" className="tickets-logo"/>
          </div>
          <div className="ticket-form">
            <br />
            <label className="count">
              <input type="number"
                placeholder= "Quantitiy"
                onChange={this.update('count')}
                className="ticket-input" />
            </label>
            <br />
            <input type="submit" value="Submit" className="submitButton tickets"/>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default withRouter(TicketModal);