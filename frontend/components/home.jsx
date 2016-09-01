import React from 'react';
import {Router, Root} from 'react-router';
import { withRouter } from 'react-router';
import EventIndex from './event_index';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }
  
  // Re-write this to link to my profile after done.
  handleClick() {
    if (this.props.currentUser) {
      this.props.router.push("/events/1");
    } else {
      this.props.router.push("/home/signup");
    }
  }

  render() {
    return (
      <div className="home">
        <div className="banner">
          <ul className="cb-slideshow">
            <li><span>Image 01</span>
              <div>
                <h3>Experience, Discover, Explore</h3>
                <h4>Turnout helps you find exciting events near you.</h4>
                <button className="get-started-button" onClick={this.handleClick}>Get Started</button>
              </div>
            </li>
            <li><span>Image 02</span></li>
            <li><span>Image 03</span></li>
            <li><span>Image 04</span></li>
            <li><span>Image 05</span></li>
            <li><span>Image 06</span></li>
          </ul>
          <div className="banner-header"><h2></h2></div>
        </div>
         <div className="events">
          <EventIndex events={this.props.events} requestEvents={this.props.requestEvents}/>
          {this.props.children}  
        </div>  
      </div>
    )
  }
}

export default withRouter(Home);
// export default Search;