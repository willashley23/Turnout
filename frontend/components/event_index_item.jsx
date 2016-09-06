import React from 'react';
import { withRouter } from 'react-router';
import { findBookmark, findTicket, dateStringify } from '../reducers/selector';


class EventIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleBookmark = this.handleBookmark.bind(this);
    this.toggle = this.toggle.bind(this);
    this.determineIcon = this.determineIcon.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
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
    //May throw an error on the home page. Will need to pass filter as props.
    // console.log(this.props.filter)
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

  handlePrice() {
    if (this.props.event.price === 0) {
      return "FREE"
    } else {
      return (
        "$" + `${this.props.event.price}`
        )
    }
  }

  handleDelete() {
    debugger
    let t = findTicket(this.props.ticket, this.props.event.id)
    this.props.destroyTicket(t);
  }

  handleBookmark() {
    if (this.props.currentUser === null) {
      this.props.router.push('/home/login')
    } else {
      if (this.toggle() === "clicked hvr-icon-pop") {
        let b = findBookmark(this.props.bookmark, this.props.event.id)
        this.props.destroyBookmark(b)
      } else {
        console.log("not clicked")
       this.props.createBookmark(this.props.event.id)
      } 
    }
  }

  render() {
    return (
    <div className="flex-wrapper">
      <div className="event-card">
          <div className="event-card-main">
            <div className="event-card-clickarea" onClick={this.handleClick}>
              <img src={this.handleImage()} className="event-image" />
              <span className="event-card-label">{this.handlePrice()}</span>
              <p className="event-date">{dateStringify(this.props.event.date)}</p>
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