import React, { Component } from 'react'
import './Parade.css'
import paradeRoute from './paradeRoute.png'
import { Link } from 'react-router-dom';
import CountdownClock from '../CountdownClock';
import ParadeRegistration from './ParadeRegistration'

export default class Parade extends Component {

    render() {
        return (
            <div>
                <div className="ms-hero-page-override ms-hero-img-parade ms-hero-bg-primary">
                    <div className="container">
                        <div className="text-center">
                            <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">
                                Charleston Pride <span>Parade</span></h1>
                            <h2 className="lead lead-lg color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">
                         Saturday, September 22nd 2018 @ 9:00am</h2>
                            <CountdownClock eventTime="2018-09-22T09:00:00" color="warning" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h3 className="color-primary wow fadeInUp animation-delay-2">Parade Details</h3>
                            <p className="wow fadeInUp animation-delay-3" >Register to participate in the <strong>2018 Charleston Pride Parade! </strong>
                                Thousands will line the streets of historic downtown Charleston to come out to celebrate diversity and to support equal rights for all citizens.</p>
                            <p className="wow fadeInUp animation-delay-4">The <strong>1.8 mile</strong> parade route begins at Wragg Mall on the corners of Ann and Meeting Streets. Immediately the parade processes to King Street and heads south on King, traveling past Marion Square, the heart of downtown Charleston.Once the parade hits Broad Street, the procession takes a right and continues until Colonial Lake. Viewing of the parade is encouraged on King Street.</p>
                            <h4>Entries are Automatically Entered to Compete in These Award Categories:</h4>
                            <ul>
                                <li>Best Use of Pride Colors</li>
                                <li>Most Creative/Unusual</li>
                                <li>Best Use of Music</li>
                                <li>Most Fabulously Dressed</li>
                                <li>Best Decorated Vehicle</li>
                                <li>Best Float</li>
                                <li>Best Small Group (Less than 10 individuals)</li>
                                <li>Best Walking Entry</li>
                            </ul>

                            <h4 className="text-center"><span className="color-warning">NEW</span> Parade registration is included with all <Link to="/sponsorships">Sponsorships </Link>!</h4>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src={paradeRoute} alt="Parade Route" className="img-fluid my-3"></img>
                        </div>
                    </div>
                    <ParadeRegistration/>
                </div>
            </div>
        )
    }
}