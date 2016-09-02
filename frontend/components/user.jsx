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
  }

  componentDidMount() {
    this.filterMyEvents();
  }

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
    console.log("outside")
    console.log(e)
    debugger
    if (Object.keys(e).length > 0) {
      let myEventsFilter = (events, id) => {
        console.log("id:")
        console.log(id)
        console.log("events")
        console.log(events)
        console.log("e")
        console.log(e)
        console.log(`evaluate: ${e[id+1]}`)
        if(e[id+1] != null){
          return (cid === e[id+1].author_id)
        }
      }
      this.props.updateFilter(myEventsFilter);
    }
  }

  renderEvents() {
    // debugger
    return (
    <div className ="user-profile-events">
      <ul>
       {Object.keys(this.props.events).map(id => <EventIndexItem 
        key={`event-index-item${id}`} 
        event={this.props.events[id]}
        user={true}
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