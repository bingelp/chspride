import React from 'react';
import Event from './UpcomingEvent'
import { Link } from 'react-router-dom';

class UpcomingEvents extends React.Component {
    render() {
    return (
        <div className="wrap bg-primary color-dark">
        <div className="container text-center">
            <h2>Upcoming Events</h2>
            <div className="row">
            <Event/>
            <Event/>
            <Event/>
            <Event/>
            </div>
            <Link to="/events" className="btn btn-warning btn-raised" > <i className="zmdi zmdi-eye"></i>View All Events</Link>
        </div>
        </div>)
    }
}

export default UpcomingEvents;