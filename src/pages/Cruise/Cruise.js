import React, { Component } from 'react'
import "./Cruise.css";
import ETapestryForm from '../../components/ETapestryForm';
import CountdownClock from '../../components/CountdownClock';
import {Link } from 'react-router-dom'

export default class Cruise extends Component {
    render() {
        return (
            <div>
                <div className="ms-hero-page-override ms-hero-img-cruise ms-hero-bg-warning">
                    <div className="container">
                        <div className="text-center">
                            <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">
                            Halloween on the Harbor</h1>
                            <h2 className="lead lead-lg color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">
                            Wear a costume or come as you are. Costume contest with prizes!</h2>
                                <h3 className="lead color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">Saturday, October 27,  Boarding @ 7:30 PM | Frow Aquarium Wharf</h3>
                            <CountdownClock eventTime="2018-10-27T19:30:00-04:00" color="white" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <p> Charleston Pride is excited to announce <strong>Halloween on the Harbor!</strong> This special edition of Halloween on the Harbor takes place on <strong>October 27th</strong>. You’ve heard of our harbor cruises before….Well, this one will be bigger, better, and <em>spookier</em> than ever before! Wear a costume or come as you are. Costume contest with prizes.</p>
                                    <p>The evening will feature hors d’oeuvres, an open bar courtesy of Breakthru Beverage South Carolina, and DJ Kelly Sinning spinning the beats on this three hour harbor cruise! This boat features two levels with an air-conditioned floor and an open air top deck. This is an event you won’t want to miss!</p>
                                    <p>All you need is a ticket and we will provide the rest! Boarding will begin at 7:30pm at the Aquarium Wharf (360 Concord St, Charleston). The boat will depart at 8:00 pm and will return at 11:00 pm. Space is limited so make sure you get your tickets early. All proceeds benefit Charleston Pride and help to make Pride possible!</p>
                                    <p>This event is <strong>Free</strong> for <Link to="/friends-of-pride">Friends of Pride</Link>. Email <a href="mailto:info@charlestonpride.org">info@charlestonpride.org</a> to reserve.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <em>This event is 21 and up. You must have your ID ready to present at the dock. We will have your name at the dock along with the number of tickets you purchased. Please arrive at the dock with your group. Everyone in your group must have IDs. All sales are final.</em>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                <ETapestryForm form="cruise" title="Cruise" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
