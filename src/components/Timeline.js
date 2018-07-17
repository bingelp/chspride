import React, { Component } from 'react';

class TimelineTime extends Component {
  render(props) {
    let datetime = Date.parse(props.datetime);
    return (
      <time className="timeline-time" dateTime={props.datetime}><span className="date">September  {datetime.getDate()}<span className="day"> Saturday</span></span> 7:00 PM</time>
    );
  }
}

export { TimelineTime};