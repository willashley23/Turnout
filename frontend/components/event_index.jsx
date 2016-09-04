import React from 'react';
import EventIndexItem from './event_index_item';
import {withRouter} from 'react-router';

class EventIndex extends React.Component {
  componentDidMount() {
    this.props.requestEvents();
  }

  render() {
    
      return (
        <div>
        {this.props.children}
          <ul className="events-container">
            {this.props.events.map(event => <EventIndexItem 
              key={`event-index-item${event.id}`} 
              event={event}
              createBookmark={this.props.createBookmark}
              removeBookmark={this.props.removeBookmark}
              />)}
          </ul>
        </div>
        )
    };
};

export default withRouter(EventIndex);