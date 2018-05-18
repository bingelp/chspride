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
                            <h3 className="color-primary wow fadeInUp animation-delay-2">Parade Information</h3>
                            <p className="wow fadeInUp animation-delay-3" >
                                Thousands will line the streets of historic downtown Charleston to come out to celebrate diversity and to support equal rights for all citizens.</p>
                            
                            <ol className="service-list list-unstyled">
                                <li>The <strong>1.8 mile</strong> parade route begins at <strong>Wragg Mall</strong> on the corners of <strong>Ann Street</strong> and <strong>Meeting Street</strong>.</li>
                                <li>Immediately, the parade proceeds to <strong>King Street</strong> and heads south on King, traveling past <strong>Marion Square</strong>, the heart of downtown Charleston.</li>
                                <li>Once the parade hits <strong>Broad Street</strong>, the procession takes a right and continues until reaching <strong>Colonial Lake</strong>.</li>
                            </ol>
                            <h4>Viewing of the parade is encouraged on King Street</h4>
                            <h3 className="color-primary wow fadeInUp animation-delay-2">Participate in the Parade</h3>
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

                            <h4><span className="color-warning">NEW</span> Parade registration is included with all <Link to="/sponsorships">Sponsorships</Link>!</h4>
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