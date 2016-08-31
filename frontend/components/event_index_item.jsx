import React from 'react';

export default class EventIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="event-card">
          <div className="event-card-main">
            <img src={this.props.event.image_url} className="event-image" />
            <p>{this.props.event.date}</p>
            <h3>{this.props.event.title}</h3>
            <p>{this.props.event.location}</p>
          <div className="event-card-footer">
            {this.props.event.tag}
            <img src= "assets/bookmark.png" className="bookmark-icon"/>
          </div>
          </div>
      </div>
    )
  }
}