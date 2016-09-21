import React from 'react';
import { withRouter } from 'react-router';
import EventIndexItem from '../event/event_index_item';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.renderEvents = this.renderEvents.bind(this);
    this.filterUpcomingEvents = this.filterUpcomingEvents.bind(this);
    this.filterBookmarkedEvents = this.filterBookmarkedEvents.bind(this);
    this.filterMyEvents = this.filterMyEvents.bind(this); 
    this.toggleMyEvents = this.toggleMyEvents.bind(this);
    this.toggleMyBookmarks = this.toggleMyBookmarks.bind(this);
    this.toggleMyUpcomingEvents = this.toggleMyUpcomingEvents.bind(this);
  }

  componentDidMount() {
    this.props.requestEvents();
    this.props.requestBookmarks();
    this.props.requestTickets();
    this.filterMyEvents();
  }

  filterUpcomingEvents() {
    this.props.updateFilter("upcomingEvents")
  }

  filterBookmarkedEvents() {
    this.props.updateFilter("myBookmarks")
  }

  filterMyEvents() {
    this.props.updateFilter("myEvents");
  }

  toggleMyEvents() {
    if (this.props.filter === "myEvents") {
      return "hvr"
    } else {
      return "not-infocus"
    }
  } 

  toggleMyBookmarks() {
    if (this.props.filter === "myBookmarks") {
      return "hvr"
    } else {
      return "not-infocus"
    }
  } 

  toggleMyUpcomingEvents() {
    if (this.props.filter === "upcomingEvents") {
      return "hvr"
    } else {
      return "not-infocus"
    }
  }

  renderEvents() {
    if (Object.keys(this.props.events).length === 0) {
      return (
        <div>
          <h2 className="no-events-header">Got Plans?</h2>
            <img src="assets/no-event-calendar.png" className="no-events-image" />
        </div>
      )
    } else {
        return (
        <div className ="user-profile-events">
          <ul>
           { Object.keys(this.props.events).map(id => <EventIndexItem 
            key={`event-index-item${id}`} 
            event={this.props.events[id]}
            bookmark={this.props.bookmark}
            destroyBookmark={this.props.destroyBookmark}
            createBookmark={this.props.createBookmark}
            destroyTicket={this.props.destroyTicket}
            currentUser={this.props.currentUser}
            filter={this.props.filter}
            ticket={this.props.ticket}
            ticketCount={Object.keys(this.props.ticket).length}
            klass="userProfileMain"
            />) }
          </ul>
        </div>
        );
    }
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
                 <em>{Object.keys(this.props.ticket).length}</em>
                 <div className="my-upcoming-events" onClick={this.filterUpcomingEvents}>My Tickets</div>
               </li>
                 <div className={this.toggleMyUpcomingEvents()}/>
               </div>
               <div>
               <li className="tab-option">
                 <em>{Object.keys(this.props.bookmark).length}</em>
                 <div className="my-bookmarks" onClick={() => this.filterBookmarkedEvents()}>Bookmarked Events</div>
               </li>
                 <div className={this.toggleMyBookmarks()}/>
               </div>
               <div>
               <li className="tab-option">
                 <em>{this.props.currentUser.events.length}</em>
                 <div className="my-events" onClick={this.filterMyEvents}>My Events</div>
               </li>
                 <div className={this.toggleMyEvents()}/>
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