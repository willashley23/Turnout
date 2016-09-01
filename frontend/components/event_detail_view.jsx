import React from 'react';
// Components

class EventDetailView extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.requestEvents();    
  }



  render() {
    let title;
    let date;
    let image_url;
    let style;
    let price;
    if(this.props.event) {
      title = this.props.event.title;
      date = this.props.event.date;
      image_url = this.props.event.image_url;
      price = this.props.event.price;
      style = {
        backgroundImage: 'url(' + image_url + ')'
      };
    }
    return(
      <div className="event-detail-container">
      <div style={style} className="event-detail-header">
         <h1 className="event-detail-title animated fadeInDown">{title}</h1>
         <h2 className="event-detail-date animated fadeInDown">{date}</h2>
      </div>
      <div className="event-detail-menubar">
        <img src="assets/bookmark.png" className="event-detail-bookmark-icon"/>
        <button className="purchase-tickets-button">Tickets</button>
        <span className="event-detail-price">${price}</span>
      </div>
      <div className="event-detail-body">

      </div>
      </div>
    );
  }
};

export default EventDetailView;