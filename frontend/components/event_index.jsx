import React from 'react';

//Jbuthis.props.benches.map is not a function. put debugger

export default class EventIndex extends React.Component {
  componentDidMount() {
    this.props.requestEvents();
  }

  render() {
    
    let events = this.props.events.map( (event) => {
      return (
        <div className="event-card">
          <div className="event-card-main">
            <h3>{event.title}</h3>
              <div className="event-card-footer">
                footer
              </div>
          </div>
        </div>
        )
    });

    return (
      <section className = "home-events">
        <ul>
          { events }
        </ul>
      </section>
    )
  }
};
