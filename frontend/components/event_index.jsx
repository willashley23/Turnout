import React from 'react';
import EventIndexItem from './event_index_item';

export default class EventIndex extends React.Component {
  componentDidMount() {
    this.props.requestEvents();
  }

  render() {
    // debugger
      return (
        <div>
          <ul className="events-container">
            {this.props.events.map(event => <EventIndexItem 
              key={`event-index-item${event.id}`} 
              event={event}
              />)}
          </ul>
        </div>
        )
    };
};
