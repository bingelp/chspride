import React from 'react';
import ETap from '../../components/ETapestryForm'
import './Friends.css'
import shirt from './shirt.png'
import hat from './hat.png'
import visor from './visor.png'

class Friends extends React.Component {

    RainbowItem(props) {
        return (<li><i className={"fa fa-" + props.icon}></i> {props.text} {props.super}</li>)
    }

    Rainbow(props) {
        return (<div className="col-12 col-lg-6">
            <div className="price-table price-table-info wow zoomInUp animation-delay-2">
                <header className="price-table-header">
                    <span className="price-table-category">Rainbow</span>
                    <h3><sup>$</sup>20.00 <sub>/mo.</sub></h3>
                </header>
                <div className="price-table-body">
                    <ul className="price-table-list">
                        {props.children}
                    </ul>
                </div>
            </div>
        </div>)
    }

    DoubleRainbowItem(props) {
        if (props.double) {
            return (<li><i className={"fa fa-" + props.icon}></i> {props.text}<i className="fa fa-times" aria-hidden="true"></i> 2 {props.super}</li>)
        }
        return (<li><i className={"fa fa-" + props.icon}></i> {props.text} {props.super}</li>)
    }

    DoubleRainbow(props) {
        return (<div className="col-12 col-lg-6">
            <div className="price-table price-table-success wow zoomInDown animation-delay-2">
                <header className="price-table-header">
                    <span className="price-table-category">Double Rainbow</span>
                    <h3><sup>$</sup>30.00 <sub>/mo.</sub></h3>
                </header>
                <div className="price-table-body">
                    <ul className="price-table-list">
                        {props.children}
                    </ul>
                </div>
            </div>
        </div>)
    }

    FinePrint(props) {
        return (
            <div className="col-12">
                <div className="well">
                    <p><em>Membership is a 12 month commitment at which point membership becomes month-to-month and can be cancelled anytime after one year.</em></p>
                    <p><em>* Including but not limited to annual Pride on the Harbor Cruises and Toast to Equality. Tickets can be reserved by emailing <a href="mailto:info@charlestonpride.org">info@charlestonpride.org</a>. Tickets must be requested a minimum of 24hrs before start of event and event must not already be sold out.</em></p>
                    <p><em>&#8224; Acknowledgement will only appear if desired. Membership must be started before the cut off date for the Pride Guide.</em></p>
                    <p><em>^</em> Exclusive gift is your choice of specially branded hat, visor, or shirt.</p>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <div className="ms-hero-page-override ms-hero-img-friends ms-hero-bg-primary">
                    <div className="container">
                        <div className="text-center">
                            <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">
                                Friends of Pride</h1>
                            <p className="lead lead-sm color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">
                                At Charleston Pride, we believe that we can make a big difference in our community with a little help from our friends. Become an official <span className="color-warning">Friend of Pride</span> through joining our monthly donor program. <span className="color-warning">Friends of Pride</span> get exclusive access to many of our events and some extra perks along the way.</p>
                        </div>
                    </div>
                </div>
                <div className="container card-hero bg-white">
                    <div className="mt-2">
                            <div className="text-center">
                                <h1 className="pt-4">Membership Options</h1>
                            </div>
                            <div className="row">
                                <this.Rainbow>

                                    <this.RainbowItem icon="ticket" text="Free Entry to Official Charleston Pride Events/Fundraisers" super="*" />
                                    <this.RainbowItem icon="address-book" text="Acknowledgement in Pride Guide" super="&#8224;" />
                                    <this.RainbowItem icon="glass" text="Access to the VIP Tent at the Festival (Includes Open Bar)" />
                                    <this.RainbowItem icon="star-o" text="Free Admission to Prism Party" />
                                    <this.RainbowItem icon="handshake-o" text="Meet and Greet with Entertainment (if avaliable)" />
                                    <this.RainbowItem icon="gift" text="Exclusive Gift Only Available to Friends of Pride" super="^" />
                                </this.Rainbow>
                                <this.DoubleRainbow>
                                    <this.DoubleRainbowItem icon="ticket" text="Free Entry to Official Charleston Pride Events/Fundraisers" double="true" super="*" />
                                    <this.DoubleRainbowItem icon="address-book" text="Acknowledgement in Pride Guide" super="&#8224;" />
                                    <this.DoubleRainbowItem icon="glass" text="Access to the VIP Tent at the Festival (Includes Open Bar)" double="true" />
                                    <this.DoubleRainbowItem icon="star-o" text="Free Admission to Prism Party" double="true" />
                                    <this.DoubleRainbowItem icon="handshake-o" text="Meet and Greet with Entertainment (if avaliable)" double="true" />
                                    <this.DoubleRainbowItem icon="gift" text="Exclusive Gift Only Available to Friends of Pride" super="^" />
                                </this.DoubleRainbow>
                            </div>
                            <div className="row">
                                    <h2 className="text-center col-12">Pick From One of the Following as Your Exclusive Gift</h2>

                                        <div className="col-4">
                                            <img src={hat} alt="" className="img-fluid"/>
                                        </div>
                                        <div className="col-4">
                                            <img src={shirt} alt="" className="img-fluid"/>
                                        </div>
                                        <div className="col-4">
                                            <img src={visor} alt="" className="img-fluid"/>
                                        </div>
                            </div>
                            <div className="row">
                                <this.FinePrint />
                            </div>
                        <ETap form="friends" title="friends-of-pride" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Friends;