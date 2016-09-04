import React from 'react';
import { withRouter } from 'react-router';
import EventIndexItem from './event_index_item';
import myEventsFilter from '../util/filter_api_util';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.renderEvents = this.renderEvents.bind(this);
    this.filterUpcomingEvents = this.filterUpcomingEvents.bind(this);
    this.filterBookmarkedEvents = this.filterBookmarkedEvents.bind(this);
    this.filterMyEvents = this.filterMyEvents.bind(this); 
  }

  componentDidMount() {
    this.filterMyEvents();
  }

  componentWillReceiveProps(nextProps) {
  this.setState({
    events: nextProps.events > this.props.events
  });
}

  filterUpcomingEvents() {
    this.props.updateFilter( (id) => {
        currentUser.tickets.forEach( (ticket)  => {
          (ticket.event_id === id)
        });
    });
  }

  filterBookmarkedEvents() {
    this.props.updateFilter("myBookmarks")
  }

  filterMyEvents() {
    // debugger
      this.props.updateFilter("myEvents");
    }


  renderEvents() {
    debugger
    return (
    <div className ="user-profile-events">
      <ul>
       {Object.keys(this.props.events).map(id => <EventIndexItem 
        key={`event-index-item${id}`} 
        event={this.props.events[id]}
        />)}
      </ul>
    </div>
    );
  }

  render() {
    return (
    <div className="user-profile-container">
      <div className="user-profile-header">
       <h1 className="profile-greeting">My <span className="profile-span">Profile</span></h1>
          <div className="user-profile-menu">
            <ul className="menu-tabs">
              <div>
               <li className="tab-option">
                 <em>0</em>
                 <div onClick={this.filterUpcomingEvents}>Upcoming Events</div>
               </li>
               </div>
               <div>
               <li className="tab-option">
                 <em>{currentUser.bookmarks.length}</em>
                 <div onClick={() => this.filterBookmarkedEvents()}>Bookmarked Events</div>
               </li>
               </div>
               <div>
               <li className="tab-option">
                 <em>{currentUser.events.length}</em>
                 <div className="my-events" onClick={this.filterMyEvents}>My Events</div>
               </li>
               </div>
            </ul>
          </div>
      </div>
      <div>
        {this.renderEvents()}
      </div>
    </div>
    );
  }
}

export default withRouter(UserProfile);