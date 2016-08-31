import React from 'react';

export default class EventIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="event-card">
          <div className="event-card-main">
            <h3>{this.props.event.title}</h3>
              <div className="event-card-footer">
                {this.props.event.tag}
              </div>
          </div>
      </div>
    )
  }
}