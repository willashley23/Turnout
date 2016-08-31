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
    if(this.props.event) {
      title = this.props.event.title;
      date = this.props.event.date;
      image_url = this.props.event.image_url;
      style = {
        backgroundImage: 'url(' + image_url + ')'
      };
    }
    return(
      <div className="event-detail-container">
      <div style={style} className="event-detail-header">
         <h1 className="event-detail-title">{title}</h1>
         <h2 className="event-detail-date">{date}</h2>
      </div>
      <div className="event-detail-menubar">

      </div>
      <div className="event-detail-body">

      </div>
      </div>
    );
  }
};

export default EventDetailView;