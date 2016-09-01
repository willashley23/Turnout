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
              <div>
               <li className="tab-option">
                 <em>0</em>
                 <div>Upcoming Events</div>
               </li>
               </div>
               <div>
               <li className="tab-option">
                 <em>0</em>
                 <div>Bookmarked Events</div>
               </li>
               </div>
               <div>
               <li className="tab-option">
                 <em>0</em>
                 <div>Past Events</div>
               </li>
               </div>
            </ul>
          </div>
      </div>
    </div>
    );
  }
}

export default withRouter(UserProfile);