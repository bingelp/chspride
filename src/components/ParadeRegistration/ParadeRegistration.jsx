import React, { Component } from 'react'
import './ParadeRegistration.css'
import paradeRoute from './paradeRoute.png'
import { Link } from 'react-router-dom';

export default class ParadeRegistration extends Component {
    
    render() {
        return (
            <div>
                <div className="ms-hero-page-override ms-hero-img-parade ms-hero-bg-primary">
                    <div className="container">
                        <div className="text-center">
                            <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">Parade <span>Registration</span></h1>
                            <p className="lead lead-lg color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">The Pride Parade steps off at<span class="color-warning"> 9:00am </span> on Saturday, September 22nd</p>
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
                    <div className="row">
                        <div class="bg-info">
                            <div class="card-body-big">
                                <h2 class="color-white text-center mb-4">How to register?</h2>
                                <p class="lead lead-lg text-center mt-4">You can easily register online by filling out the form below. 
                                Walking entries can be registered for only <strong>$15</strong> and vehicle/float entries can be registered for just <strong>$25</strong>.
                                If you have any questions, please feel free to reach out to us at 
                                <a className="color-royal" href="mailto:info@charlestonpride.org"> info@charlestonpride.org.</a> </p>
                                <p className="ml-3"><em>All sales are final.</em></p>
                                <div class="row">
                                    <iframe id="etapIframe" title="parade-registration" src="https://app.etapestry.com/onlineforms/CharlestonPrideFestivalInc/ParadeRegistration.html"></iframe>
                                    <script src="//app.etapestry.com/hosted/eTapestry.com/etapEmbedResponsiveResizing.js" type="text/JavaScript"></script>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}