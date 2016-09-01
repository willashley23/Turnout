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
      price: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
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
        <button className="event-form-button">CREATE</button>
      </div>
        <ul>
          {this.errors()}
        </ul>
        <form className="event-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.title}
              placeholder="Title"
              onChange={this.update('title')}/>
            <input
              type="text"
              value={this.state.image_url}
              placeholder="Image Url"
              onChange={this.update('image_url')}/>
            <select
              value={this.state.tag}
              onChange={this.update('tag')}
              defaultValue="Select tag">
            </select>
            <input
              type="number"
              value={this.state.price}
              placeholder="Price"
              onChange={this.update('price')}/>
            <input
              type="text"
              value={this.state.description}
              placeholder="Description"
              onChange={this.update('description')}/>
          <button>Create Event</button>
        </form>
      </section>
    );
  }
}

export default withRouter(EventForm);