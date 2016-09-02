import React from 'react';
import { withRouter } from 'react-router';

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleBookmark = this.handleBookmark.bind(this);
  }

  componentDidMount() {

  }

  handleClick() {
    this.props.router.push(`/events/${this.props.event.id}`)
  }

  handleImage() {
    if (this.props.event.image_url === "") {
      return "assets/default.png"
    } else {
      return this.props.event.image_url
    }
  }

  handleBookmark() {
    //?? What to do here? 
    // debugger
     this.props.createBookmark(this.props.event.id)
  }

  render() {

    return (
    <div className="flex-wrapper">
      <div className="event-card">
          <div className="event-card-main">
            <div className="event-card-clickarea" onClick={this.handleClick}>
              <img src={this.handleImage()} className="event-image" />
              <p className="event-date">{this.props.event.date}</p>
              <h3 className="event-title">{this.props.event.title}</h3>
              <p className="event-location">{this.props.event.location}</p>
            </div>
          <div className="event-card-footer">
            <span className="event-tag">#{this.props.event.tag}</span>
            <img src= "assets/bookmark.png" className="bookmark-icon" onClick={this.handleBookmark}/>
          </div>
          </div>
      </div>
    </div>
    )
  }
}

export default withRouter(EventIndexItem);