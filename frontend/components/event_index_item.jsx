import React from 'react';

export default class EventIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
    <div className="flex-wrapper">
      <div className="event-card">
          <div className="event-card-main">
            <img src={this.props.event.image_url} className="event-image" />
            <p className="event-date">{this.props.event.date}</p>
            <h3 className="event-title">{this.props.event.title}</h3>
            <p className="event-location">{this.props.event.location}</p>
          <div className="event-card-footer">
            <span className="event-tag">#{this.props.event.tag}</span>
            <img src= "assets/bookmark.png" className="bookmark-icon"/>
          </div>
          </div>
      </div>
    </div>
    )
  }
}