import React from 'react';
import { withRouter } from 'react-router';
import EventIndexItem from './event_index_item';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.renderEvents = this.renderEvents.bind(this);
    this.filterUpcomingEvents = this.filterUpcomingEvents.bind(this);
    this.filterBookmarkedEvents = this.filterBookmarkedEvents.bind(this);
    this.filterMyEvents = this.filterMyEvents.bind(this);
    // let currentId = currentUser.id;
  }

  // componentDidMount() {
  //   this.props.requestEvents();
  // }

  filterUpcomingEvents() {
    this.props.updateFilter( (id) => {
        currentUser.tickets.forEach( (ticket)  => {
          (ticket.event_id === id)
        });
    });
  }

  filterBookmarkedEvents() {
    this.props.updateFilter( (id) => {
        currentUser.bookmarks.forEach( (bookmark)  => {
          (bookmark.event_id === id)
        });
    });
  }

  filterMyEvents() {
    let e = this.props.events
    let cid = this.props.currentUser.id
    if (e) {
      let myEventsFilter = (events, id) => {
      // console.log(e)
      // console.log(cid)
      // if (cid === e[id].author_id) {
      //   console.log(e[id])
      // }
       return (cid === e[id].author_id)
      }
      // myEventsFilter = myEventsFilter.bind(null, this.props.events)
      this.props.updateFilter(myEventsFilter);
    }
    // console.log(this.props.events)
  }

//move this down to here the click handler is.
  renderEvents() {
    console.log(this.props.events)
    return (
    <div>
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
                 <em>0</em>
                 <div onClick={this.filterBookmarkedEvents}>Bookmarked Events</div>
               </li>
               </div>
               <div>
               <li className="tab-option">
                 <em>0</em>
                 <div className="my-events" onClick={this.filterMyEvents}>My Events</div>
               </li>
               </div>
            </ul>
            <div>
            {this.renderEvents()};
            </div>
          </div>
      </div>
    </div>
    );
  }
}

export default withRouter(UserProfile);