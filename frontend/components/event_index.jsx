import React from 'react';
import EventIndexItem from './event_index_item';
import {withRouter} from 'react-router';

class EventIndex extends React.Component {
  componentDidMount() {
    this.props.requestEvents();
  }

  render() {
    // debugger
      return (
        <div>
        {this.props.children}
          <ul className="events-container">
            {this.props.events.map(event => <EventIndexItem 
              key={`event-index-item${event.id}`} 
              event={event}
              bookmark={this.props.bookmarks}
              createBookmark={this.props.createBookmark}
              destroyBookmark={this.props.destroyBookmark}
              currentUser={this.props.currentUser}
              />)}
          </ul>
        </div>
        )
    };
};

export default withRouter(EventIndex);