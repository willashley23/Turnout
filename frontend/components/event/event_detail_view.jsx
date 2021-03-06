import React from 'react';
import { withRouter } from 'react-router';
import {dateStringify} from '../../reducers/selector';
import { Link } from 'react-router';
import TicketModalContainer from '../ticket_modal/ticket_modal_container';
import Footer from '../home/footer';
import MarkerManager from '../../util/marker_manager';

class EventDetailView extends React.Component {
  constructor(props) {
    super(props);
    this.handleTickets = this.handleTickets.bind(this);
    this.handleBookmark = this.handleBookmark.bind(this);
    this.toggle = this.toggle.bind(this);
    this.listTags = this.listTags.bind(this);
    this.handleTagClick = this.handleTagClick.bind(this);
  }
  
  componentDidMount() {
    if (!this.props.event) {
      this.props.requestEvent(this.props.params.id);
    }
    let mapMaker = new MarkerManager()
    window.setTimeout( () => {
      mapMaker.generateMap(this.props.event.location);
      debugger
      document.getElementById('direction-link').href = `http://maps.google.com/maps?daddr=${this.props.event.location}`
    }, 1500);
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  handleTickets() {
    if (this.props.currentUser === null) {
      this.props.router.push('/home/login');
    } else {
      this.props.router.push(`/events/${this.props.event.id}/tickets/new`)
    }
  }

  handleBookmark() {
    if (this.props.currentUser === null) {
      this.props.router.push('/home/login')
    } else {
      if (this.toggle() === "clicked hvr-icon-pop") {
        this.props.event.bookmarks.forEach( (bookmark) => {
          if (bookmark.user_id === this.props.currentUser.id){
            document.getElementsByClassName("bookmark-icon")[0].style.color = "#282C35";
            let found = bookmark
            this.props.destroyBookmark(found)
          }
        });
      } else {
       this.props.createBookmark(this.props.event.id)
       document.getElementsByClassName("bookmark-icon")[0].style.color = "#22b8ff";
      } 
    }
  }

  handleTagClick(tag) {
    return ( () => {
      this.props.router.push(`/categories/${tag}`) 
    })
  }

  listTags() {
    let allTags = []
    if(this.props.event != undefined) {
      if (this.props.event.tag.split(", ").length > 0) {
        for (let i = 0; i <= 5; i++) {
          if (this.props.event.tag.split(", ")[i] != undefined){
            allTags.push(<p className="event-detail-p event-detail-tag" onClick={this.handleTagClick(this.props.event.tag.split(", ")[i])}>#{this.props.event.tag.split(", ")[i]}</p>)
          }
        }
        return (
          <div className="tag-collection">
            { allTags }
          </div>
        )
      } else {
        return (
          <p className="event-detail-p event-detail-tag">#{this.props.event.tag}</p>
        )
      }
    }
  }

  toggle() {
    let eventClass;
    if (this.props.currentUser !== null && this.props.event != null) {
      if (this.props.event.bookmarks.length > 0) { 
        this.props.event.bookmarks.forEach( (bookmark) => {
          if (bookmark.event_id === this.props.event.id) {
            eventClass = "clicked hvr-icon-pop"
          }
        });
      } else {
        eventClass = "not-clicked"
      }
    } else {
      eventClass = "not-clicked"
    }
    return eventClass;
  }

  render() {
    let title;
    let date;
    let options;
    let image_url;
    let style;
    let price;
    let description;
    let location;
    let tag;
    if(this.props.event) {
      title = this.props.event.title;
      date = this.props.event.date;
      image_url = this.props.event.image_url;
      price = this.props.event.price;
      description = this.props.event.description;
      location = this.props.event.location;
      tag = this.props.event.tag;
      if (this.props.event.image_url === "") {
        style = {
          backgroundImage: 'url(assets/default.png)'
        };
      } else {
        style = {
          backgroundImage: 'url(' + image_url + ')'
        };
      }
  }
    
    return(
      <div className="event-detail-container">
      {this.props.children}
      <div style={style} className="event-detail-header">
         <h2 className="event-detail-date animated fadeInDown">{dateStringify(date)}</h2>
         <h1 className="event-detail-title animated fadeInDown">{title}</h1>
         <h2 className="event-detail-date price2 animated fadeInDown">Tickets from ${price}</h2>
      </div>
      <div className="event-detail-body-wrapper">
      <div className="event-detail-menubar">
         <i className= {"fa fa-bookmark-o bookmark-icon event-detail-view " + this.toggle()} onClick={this.handleBookmark}></i>
        <button className="purchase-tickets-button" onClick={this.handleTickets}>Tickets</button>
        <span className="event-detail-price">${price}</span>
      </div>
      <div className="event-detail-body">
          <div className="event-detail-info">
            <div className="event-pair">
              <h2 className="detail-headings">When: </h2>
              <p className="event-detail-p">{dateStringify(date)}</p>
            </div>
             <div className="event-pair">
              <h2 className="detail-headings">Where: </h2>
              <p className="event-detail-p">{location}</p>
            </div>
             <div className="event-pair">
              <h2 className="detail-headings">Tags: </h2>
              {this.listTags()}
            </div>
            <div className="event-description">
              <h2 className="event-description-header">Event Description</h2>
              <p className="event-description-body">{description}</p>
              <h2 className="event-description-header directions">Directions</h2>
              <div className="map_" ref="map" id="map"></div>
              <a href="" id="direction-link"></a>
            </div>
          </div>
          <br />
      </div>
      </div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
};

export default withRouter(EventDetailView);