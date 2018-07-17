import React, { Component } from 'react';

class TimelineTime extends Component {
  render(props) {
    var datetime = new Date(this.props.datetime);
    var dayOfMonth = datetime.getDate();
    return (
      <time className="timeline-time" dateTime={this.props.datetime}><span className="date">September  {datetime.getDate()}<span className="day"> Saturday</span></span> 7:00 PM</time>
    );
  }
}

export { TimelineTime};