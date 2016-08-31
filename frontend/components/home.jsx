import React from 'react';
import {Router, Root} from 'react-router';
import { withRouter } from 'react-router';
import EventIndex from './event_index';

class Home extends React.Component {
  constructor(props) {
    super(props)
    // this.navigateToSearch = this.navigateToSearch.bind(this);
  }
  
    // navigateToSearch() {
    //   this.props.router.push("events/new");
    // }

  render() {
    return (
       <div>
        <EventIndex events={this.props.events} requestEvents={this.props.requestEvents}/>
        {this.props.children}  
      </div>  
    )
  }
}

export default withRouter(Home);
// export default Search;