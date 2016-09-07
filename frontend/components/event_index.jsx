import React from 'react';
import EventIndexItem from './event_index_item';
import {withRouter} from 'react-router';

class EventIndex extends React.Component {
  
  componentDidMount() {
    this.props.requestEvents();
  }

  render() {
    // debugger
    //limit could cause problems if you slice larger than max size of array
      return (
        <div>
        {this.props.children}
          <ul className="events-container">
            {this.props.events.slice(0, this.props.limit).map(event => <EventIndexItem 
              key={`event-index-item${event.id}`} 
              event={event}
              bookmark={this.props.bookmarks}
              ticket={this.props.ticket}
              createBookmark={this.props.createBookmark}
              destroyBookmark={this.props.destroyBookmark}
              currentUser={this.props.currentUser}
              filter={this.props.filter}
              klass="default"
              />)}
          </ul>
        </div>
        )
    };
};

export default withRouter(EventIndex);