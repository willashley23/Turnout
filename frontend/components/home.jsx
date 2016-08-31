import React from 'react';
import {Router, Root} from 'react-router';
import { withRouter } from 'react-router';

class Search extends React.Component {
  constructor(props) {
    super(props)
    // this.navigateToSearch = this.navigateToSearch.bind(this);
  }
  
    // navigateToSearch() {
    //   this.props.router.push("eventss/new");
    // }

  render() {
//what props do I pass to these?
    return (
      <div>

        {this.props.children}  

      </div>  
    )
  }
}

export default withRouter(Search);
// export default Search;