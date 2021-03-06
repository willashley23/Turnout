import React from 'react';
import { withRouter } from 'react-router';
import Footer from '../home/footer';

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

  componentDidMount() {
    this.props.resetErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createEvent({event: this.state});
    this.props.resetErrors();
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
        let parsed = url.split("upload/")
        parsed[0] += "upload/c_scale,h_230,w_460/"
        parsed = parsed.join('')
        that.state.image_url = parsed
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

  findErrors(errorType) {
    let errorString;
    if (this.props.eventErrors && this.props.eventErrors.length > 0) {
      this.props.eventErrors.forEach( (error) => {
        if (error.split(" ")[0] === errorType) {
          errorString = error
        }
      });
      return (
        <h2 className="error">{errorString}</h2>
      )
    }
  }

  handleBoxShadow() {
    if (this.props.eventErrors && this.props.eventErrors.length > 0) {
      return "bad-input"
    } else {
      return ""
    }
  }

  render() {
    return (
      <section className="event-form-container">
      <div className="event-form-header">
        <h1 className="event-form-h1">Create Event</h1>
        <button className="event-form-button" onClick={this.handleSubmit}>CREATE</button>
      </div>
        <div className="form-wrapper">
        <form className="event-form" onSubmit={this.handleSubmit}>
            <h2 className="event-form-subtitle"><span className="form-numerals">1</span>Event Details</h2>
            <label className="form-label">Title</label>
            <input
              type="text"
              value={this.state.title}
              placeholder="Title"
              className={"form-input title2 " + this.handleBoxShadow()}
              onChange={this.update('title')}/>
            {this.findErrors("Title")}
            <label className="form-label">Location</label>
            <input
              type="text"
              value={this.state.location}
              placeholder="Location"
              className={"form-input location2 " + this.handleBoxShadow()}
              onChange={this.update('location')}/>
            {this.findErrors("Location")}
            <label className="form-label">Date</label>
            <input
              type="date"
              className={"form-input date2 " + this.handleBoxShadow()}
              accept="image/*"
              onChange={this.update('date')}/>
            {this.findErrors("Date")}
            <h2 className="event-form-subtitle"><span className="form-numerals">2</span>Add An Image</h2>
            <button
              id="upload"
              placeholder="Image Url (Optional)"
              className="form-input2"
              onClick={this.uploadImage}/>
              <div className="image-drop"><a className="image-upload-card" onClick={this.handleImageClick}>Upload your photo</a></div>
              <br/>
              <small>Note: You will not see confirmation of image upload.</small>
            <h2 className="event-form-subtitle"><span className="form-numerals">3</span>Final Information</h2>
            <label className="form-label">Add Tags</label>
            <input
              type="text"
              value={this.state.tag}
              placeholder="Enter tags, seperated by a comma and a space."
              onChange={this.update('tag')}
              className="form-input title2"/>
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
        <footer>
          <Footer />
        </footer>
      </section>
    );
  }
}

export default withRouter(EventForm);