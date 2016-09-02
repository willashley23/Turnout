import React from 'react';
import { withRouter } from 'react-router';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      image_url: '',
      description: '',
      location: '',
      tag: '',
      price: 0,
      author_id: this.props.currentUser.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.currentUser.event_count += 1;
    this.props.createEvent({event: this.state});
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  errors() {
    if (this.props.eventErrors) {
      return (
        this.props.eventErrors.responseJSON.map((error) => {
          return (<li className="error" key={error}>{error}</li>);
        })
      );
    }
    return <ul/>;
  }

  render() {
    return (
      <section className="event-form-container">
      <div className="event-form-header">
        <h1 className="event-form-h1">Create Event</h1>
        <button className="event-form-button" onClick={this.handleSubmit}>CREATE</button>
      </div>
        <ul>
          {this.errors()}
        </ul>
        <h2 className="event-form-subtitle">Event Details</h2>
        <form className="event-form" onSubmit={this.handleSubmit}>
            <label className="form-label">Title</label>
            <input
              type="text"
              value={this.state.title}
              placeholder="Title"
              className="form-input"
              onChange={this.update('title')}/>
            <label className="form-label">Image</label>
            <input
              type="text"
              value={this.state.image_url}
              placeholder="Image Url (Optional)"
              className="form-input"
              onChange={this.update('image_url')}/>
            <label className="form-label">Location</label>
            <input
              type="text"
              value={this.state.location}
              placeholder="Location"
              className="form-input"
              onChange={this.update('location')}/>
            <label className="form-label">Add a tag</label>
            <select
              value={this.state.tag}
              onChange={this.update('tag')}
              className="form-input"
              defaultValue="Select tag">
            </select>
            <label className="form-label">Price</label>
            <input
              type="number"
              value={this.state.price}
              placeholder="Price"
              className="form-input"
              onChange={this.update('price')}/>
            <label className="form-label">Date</label>
            <input
              type="date"
              className="form-input"
              onChange={this.update('date')}/>
            <label className="form-label">Description</label>
            <textarea
              value={this.state.description}
              className="form-input"
              placeholder="Description"
              onChange={this.update('description')}/>
          <button className="form-footer-button">Create Event</button>
        </form>
      </section>
    );
  }
}

export default withRouter(EventForm);