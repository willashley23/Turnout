import React from 'react';
import { withRouter } from 'react-router';
import { findBookmark } from '../reducers/selector';

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleBookmark = this.handleBookmark.bind(this);
    this.toggle = this.toggle.bind(this);
    this.determineIcon = this.determineIcon.bind(this);
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

  toggle() {
    let eventClass;
    if (this.props.currentUser !== null) {
      if (Object.keys(this.props.bookmark).length > 0) { 
        Object.keys(this.props.bookmark).forEach( (key) => {
          if (this.props.bookmark[key].event_id === this.props.event.id) {
            eventClass = "clicked hvr-icon-pop"
          }
        });
      } else {
        eventClass = "not-clicked"
      }
    } else {
      eventClass = "not-clicked"
    }
    return eventClass;
  }

  determineIcon() {
    if (this.props.filter === "upcomingEvents") {
      return (
        <i className= {"fa fa-trash-o trash-icon "} onClick={this.handleDelete}></i>
      )
    } else {
      return (
        <i className= {"fa fa-bookmark-o bookmark-icon " + this.toggle()} onClick={this.handleBookmark}></i>
      )
    }
  }

  handleDelete() {

  }

  handleBookmark() {
    // debugger
    if (this.props.currentUser === null) {
      this.props.router.push('/home/login')
    } else {
      if (this.toggle() === "clicked hvr-icon-pop") {
        let b = findBookmark(this.props.bookmark, this.props.event.id)
        // debugger
        this.props.destroyBookmark(b)
      } else {
        console.log("not clicked")
       this.props.createBookmark(this.props.event.id)
      } 
    }
  }

  render() {
    debugger
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
            {this.determineIcon()}
          </div>
          </div>
      </div>
    </div>
    )
  }
}

export default withRouter(EventIndexItem);