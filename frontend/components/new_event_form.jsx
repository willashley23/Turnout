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
      author_id: this.props.currentUser.id,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.currentUser.event_count += 1;
    this.props.createEvent({event: this.state});
  }

  handleImageClick() {
     document.getElementById("upload").click()
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  uploadImage(e) {
    let url = ""
    let that = this
    e.preventDefault();
    cloudinary.openUploadWidget(window.cloudinary_options, function(error, images) {
      if (error === null) {
        url = images[0].url
        that.state.image_url = url
        console.log(that.state.image_url)
      } else {
        console.log(error)
      }
    });
    if (this.state.image_url != "") {
      return (
        <div className="image-submit-message">
          <p className="image-submit-message-p">Image successfully uploaded!</p>
        </div>
      )
    }
  };

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
        <div className="form-wrapper">
        <form className="event-form" onSubmit={this.handleSubmit}>
            <h2 className="event-form-subtitle"><span className="form-numerals">1</span>Event Details</h2>
            <label className="form-label">Title</label>
            <input
              type="text"
              value={this.state.title}
              placeholder="Title"
              className="form-input title2"
              onChange={this.update('title')}/>
            <label className="form-label">Location</label>
            <input
              type="text"
              value={this.state.location}
              placeholder="Location"
              className="form-input location2"
              onChange={this.update('location')}/>
            <label className="form-label">Date</label>
            <input
              type="date"
              className="form-input"
              accept="image/*"
              onChange={this.update('date')}/>
            <h2 className="event-form-subtitle"><span className="form-numerals">2</span>Add An Image</h2>
            <button
              id="upload"
              placeholder="Image Url (Optional)"
              className="form-input2"
              // onChange={this.update('image_url')}
              onClick={this.uploadImage}/>
              <div className="image-drop"><a className="image-upload-card" onClick={this.handleImageClick}>Upload your photo</a></div>
              <br/>
              <small>Note: You will not see confirmation of image upload, just trust that it worked.</small>
            <h2 className="event-form-subtitle"><span className="form-numerals">3</span>Final Information</h2>
            <label className="form-label">Add a tag</label>
            <select
              value={this.state.tag}
              onChange={this.update('tag')}
              className="form-input"
              defaultValue="Select tag">
              <option value="Music">Volvo</option>
              <option value="Sports">Saab</option>
              <option value="Celebration">Mercedes</option>
              <option value="Lesson">Audi</option>
              <option value="Food">Audi</option>
              <option value="Party">Audi</option>
              <option value="Career">Audi</option>
              <option value="Networking">Audi</option>
              <option value="Tech">Audi</option>
              <option value="STEM">Audi</option>
            </select>
            <label className="form-label">Price</label>
            <input
              type="number"
              value={this.state.price}
              placeholder="Price"
              className="form-input"
              onChange={this.update('price')}/>
            <label className="form-label">Description</label>
            <textarea
              value={this.state.description}
              className="form-input"
              placeholder="Description"
              onChange={this.update('description')}/>
          <button className="form-footer-button">Create Event</button>
        </form>
        </div>
      </section>
    );
  }
}

export default withRouter(EventForm);