import React from 'react';
import EventIndexItem from './event_index_item';

export default class Category extends React.Component {
  constructor(props) {
    super(props)
  }

//Heads up, this component stores its events in an array, check container.
  render() {
    if (this.props.events.length > 0) {
      return (
        <div>
          <h2 className="category-search-header">Categories: {this.props.tag}</h2>
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
                />)}
            </ul>
        </div>
      )
    } else {
        return (
          <div>
           <h2 className="category-search-header">Categories: {this.props.tag}</h2>
            <h2 className="empty-category-header">Whoops... Looks like there are no events in this category :(</h2>
          </div>
        )
    }

  }
}