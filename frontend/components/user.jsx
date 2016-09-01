import React from 'react';
import { withRouter } from 'react-router';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   title: '',
    //   image_url: '',
    //   description: '',
    //   location: '',
    //   tag: '',
    //   price: 0
    // };
  }

  render() {
    return (
    <div className="user-profile-container">
      <div className="user-profile-header">
       <h1 className="profile-greeting">My <span className="profile-span">Profile</span></h1>
          <div className="user-profile-menu">
            <ul className="menu-tabs">
               <li className="tab-option">Upcoming Events</li>
               <li className="tab-option">Bookmarked Events</li>
               <li className="tab-option">Past Events</li>
            </ul>
          </div>
      </div>
    </div>
    );
  }
}

export default withRouter(UserProfile);