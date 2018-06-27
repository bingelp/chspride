import React, { Component } from 'react'
import CountdownClock from "../CountdownClock"
import ETap from '../ETapestryForm'
import './Pageant.css'
import BaddKitty from './badd_kitty.png'
import PageantApp from './Pageant_Reg_18.pdf'

export default class Pageant extends Component {
    render() {
        return (
            <div>
                <div className="ms-hero-page-override ms-hero-img-pageant ms-hero-bg-royal">
                    <div className="container">
                        <div className="text-center">
                            <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">
                                Charleston Pride 2018 Empress and Emperor Pageant</h1>
                            <h2 className="lead lead-lg color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">
                                Midtown Theater | Saturday, August 25th @ 9:00 pm | Doors open @ 8:00 pm</h2>
                            <CountdownClock eventTime="2018-08-25T21:00:00" color="warning" />
                            <a href="#register" className="btn btn-raised btn-royal">Register</a>
                        </div>
                    </div>
                </div>
                <div className="wrap bg-royal">
                    <div className="container text-center">
                        <div>
                            <h1>Presented By</h1>
                            <img src={BaddKitty} alt="Badd Kitty Logo" />
                        </div>
                    </div>
                </div>
                <div className="container mt-6">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <h3 className="wow zoomInDown">Join Us as We Crown the Empress and Emperor of Charleston Pride 2018!</h3>
                            <p>This year’s pageant will be held at <a target="_blank" rel="noopener noreferrer" href="https://www.midtownproductions.org/">Midtown Theatre</a> on Saturday, August 25th  at 9:00 PM.</p>
                            <p>Our host will guide our contestants through each round while our prestigious judges decide who wins it all.</p>
                            <p>Our current reigning Empress of Charleston Pride will also be stepping down from her 2017 reign. Make sure not to miss <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/bridgette.pharaohs">Bridgette Pharohs</a> as she hands over the crown to our next star! There will also be special performances from previous winners. </p>
                            <p> A cover charge of $10 will be going to support Charleston Pride.</p>
                            <p>Potential registrants can fill out the registration form below, and the official application is available for download below. Contestants must be registered by August 20th.</p>
                            <a className="btn btn-info pull-right btn-raised" download="Pageant_App_18.pdf" href={PageantApp}><i className="fa fa-download"></i> Download</a>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">
                                        <i className="fa fa-trophy"></i> Past Winners</h3>
                                </div>
                                <table className="table table-no-border table-striped">
                                    <thead>
                                        <tr>
                                            <th>Year</th>
                                            <th>Empress</th>
                                            <th>Emperor</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>2017</td>
                                            <td>Bridgette Pharohs</td>
                                            <td>Vacant</td>
                                        </tr>
                                        <tr>
                                            <td>2016</td>
                                            <td>Demi Valentino</td>
                                            <td>Vacant</td>
                                        </tr>
                                        <tr>
                                            <td>2015</td>
                                            <td>Jaisee Alexander</td>
                                            <td>Vacant</td>
                                        </tr>
                                        <tr>
                                            <td>2014</td>
                                            <td>Desiree Valentino</td>
                                            <td>Ryder Knightly</td>
                                        </tr>
                                        <tr>
                                            <td>2013</td>
                                            <td>Melody Lucas</td>
                                            <td>Oliver Fox</td>
                                        </tr>
                                        <tr>
                                            <td>2012</td>
                                            <td>Imani Valentino</td>
                                            <td>Gavin Reznor</td>
                                        </tr>
                                        <tr>
                                            <td>2011</td>
                                            <td>Ava Clear</td>
                                            <td>Kevin Michaels</td>
                                        </tr>
                                        <tr>
                                            <td>2010</td>
                                            <td>Celina Drake</td>
                                            <td>Mike Oxbig</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="text-center card">
                        <div className="card-body">
                            <h2 id="register">Pageant Registration</h2>
                            <ETap title="Pagent Registration" form="pageantregistration" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
