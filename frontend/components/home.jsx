import React from 'react';
import {Router, Root} from 'react-router';
import { withRouter } from 'react-router';
import EventIndex from './event_index';
import EventIndexContainer from './event_index_container';
import { allEventsByTag } from '../reducers/selector';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.getMoreEvents = this.getMoreEvents.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  
  componentDidMount() {
    this.props.updateFilter("myEvents")
    this.props.clearLimit();
    this.props.requestBookmarks();
  } 

  // This might be causing issues since there is no current user at first
  handleClick() {
    if (this.props.currentUser) {
      this.props.router.push(`/users/${currentUser.id}`);
    } else {
      this.props.router.push("/home/login");
    }
  }

  handleCategoryClick(tag) {
    return ( () => {
      this.props.router.push(`/categories/${tag}`) 
    })
  }

  getMoreEvents() {
    this.props.increaseLimit(this.props.limit)
  }

  handleSearch() {

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
        <div className="search-container">
           <form className="search-form" onSubmit={this.handleSearch}>
            <input type="text" className="search-bar" placeholder="SEARCH FOR EVENTS" />
            <button className="search-submit-button">Search</button>
           </form>
        </div>
          <h2 className="event-card-preheading">Popular Events Near <span className="location-span">San Francisco, CA</span></h2>
         <div className="events">
          <EventIndexContainer />
          {this.props.children}  
        </div> 
        <div className="see-more-container">
          <button className='get-started-button see-more' onClick={this.getMoreEvents}>See More</button>
        </div>
          <div className="categories-header">
            <h2 className="categories-h2">Browse Popular Categories</h2>
          </div>

        <div className="categories-container">
          <br/>
            <div className="categories-row top-row">
              <div className="category-card wide" onClick={this.handleCategoryClick("music")}>
                <div className="category-text">
                  <h2>Music</h2>
                  <p className="category-card-p">Find everything from classical concerts to music festivals</p>
                </div>
                <img src= "assets/music.jpeg" className="category-image" />
                 <div class="overlay"></div>
              </div>

              <div className="category-card festivals" onClick={this.handleCategoryClick("festival")}>
                <div className="category-text">
                  <h2>Festivals</h2>
                  <p className="category-card-p">Music, tradition, family, and more</p>
                </div>
                <img src= "assets/social.jpeg" className="category-image" />
              </div>
            </div>
         
            <div className="categories-row center-row">
              <div className="category-card parties" onClick={this.handleCategoryClick("party")}>
                <div className="category-text">
                  <h2>Parties</h2>
                  <p className="category-card-p">Happy hour and all night celebrations</p>
                </div>
                <img src= "assets/party.jpeg" className="category-image" />
              </div>

              <div className="category-card" id="lessons-card" onClick={this.handleCategoryClick("lessons")}>
                <div className="category-text" id="lessons">
                  <h2>Lessons</h2>
                  <p className="category-card-p lessons-p">Piano, fencing, ping-pong, and everything in between</p>
                </div>
                <img src= "assets/lessons.jpeg" className="category-image" />
              </div>
              
              <div className="category-card" onClick={this.handleCategoryClick("sports")}>
                <div className="category-text">
                  <h2>Sports</h2>
                  <p className="category-card-p">Triathlons, races, anything is fair game</p>
                </div>
                <img src= "assets/sports.jpeg" className="category-image" />
              </div>
            </div>

            <div className="categories-row bottom-row">
              <div className="category-card" onClick={this.handleCategoryClick("arts")}>
                <div className="category-text">
                  <h2 className="arts-header">Arts</h2>
                  <p className="category-card-p" id="arts">Art shows, touring exhibits, and performances</p>
                </div>
                <img src= "assets/arts.jpeg" className="category-image" />
              </div>

              <div className="category-card wide celebrations" onClick={this.handleCategoryClick("Celebrations")}>
                <div className="category-text">
                  <h2>Celebrations</h2>
                  <p className="category-card-p">Join in celebrations from cultures all around the globe</p>
                </div>
                <img src= "assets/colorrun.jpeg" className="category-image" />
              </div>
            </div>
          </div>
        </div> 
    )
  }
}

export default withRouter(Home);