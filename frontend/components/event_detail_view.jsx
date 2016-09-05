import React from 'react';
// Components

class EventDetailView extends React.Component {
  constructor(props) {
    super(props);
    this.handleTickets = this.handleTickets.bind(this);
  }
  
  componentDidMount() {
    // debugger
    if (!this.props.event) {
      this.props.requestEvent(this.props.params.id);    
    }
  }

  handleTickets() {
    this.props.createTicket(this.props.event.id)
  }


  render() {
    let title;
    let date;
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
      <div style={style} className="event-detail-header">
         <h1 className="event-detail-title animated fadeInDown">{title}</h1>
         <h2 className="event-detail-date animated fadeInDown">{date}</h2>
      </div>
      <div className="event-detail-body-wrapper">
      <div className="event-detail-menubar">
        <img src="assets/bookmark.png" className="event-detail-bookmark-icon"/>
        <button className="purchase-tickets-button" onClick={this.handleTickets}>Tickets</button>
        <span className="event-detail-price">${price}</span>
      </div>
      <div className="event-detail-body">
          <div className="event-detail-info">
            <div className="event-pair">
              <h2 className="detail-headings">When: </h2>
              <p className="event-detail-p">{date}</p>
            </div>
             <div className="event-pair">
              <h2 className="detail-headings">Where: </h2>
              <p className="event-detail-p">{location}</p>
            </div>
             <div className="event-pair">
              <h2 className="detail-headings">Tags: </h2>
              <p className="event-detail-p event-detail-tag">#{tag}</p>
            </div>
            <div className="event-description">
              <h2 className="event-description-header">Event Description</h2>
              <p className="event-description-body">{description}</p>
            </div>
          </div>
      </div>
      </div>
      </div>
    );
  }
};

export default EventDetailView;