import React from 'react';
import { withRouter } from 'react-router';
import EventIndexItem from './event_index_item';
import {allEventsBySearch} from '../reducers/selector';

 class Search extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestEvents()
    this.props.receiveQuery(this.props.query)
  }

   render() {
    if (this.props.events.length > 0) {
      return (
        <div>
          <h2 className="category-search-header">Search Results For: {this.props.query}</h2>
            <ul className="events-container">
              {this.props.events.map(event => <EventIndexItem 
                key={`event-index-item${event.id}`} 
                event={event}
                bookmark={this.props.bookmarks}
                ticket={this.props.ticket}
                createBookmark={this.props.createBookmark}
                destroyBookmark={this.props.destroyBookmark}
                currentUser={this.props.currentUser}
                filter={this.props.filter}
                klass="category-event-card"
                />)}
            </ul>
        </div>
      )
    } else {
        return (
          <div>
           <h2 className="category-search-header">Search: <span className="search-tag">{this.props.query}</span></h2>
           <img src="assets/no-event-calendar.png" className="no-event-image" />
           <h2 className="empty-category-header">Looks like there are no events that match this search.</h2>
          </div>
        )
    }

  }
}

export default withRouter(Search);