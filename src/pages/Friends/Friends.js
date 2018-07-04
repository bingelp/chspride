import React from 'react';
import ETap from '../../components/ETapestryForm'
class Friends extends React.Component {

    FriendsMonthly() {
        return (<div className="col-12 col-lg-6">
            <div className="price-table price-table-info wow zoomInUp animation-delay-2">
                <header className="price-table-header">
                    <span className="price-table-category">Monthly</span>
                    <h3><sup>$</sup>10.00 <sub>/mo.</sub></h3>
                </header>
                <div className="price-table-body">
                    <ul className="price-table-list">
                        <li><i className="fa fa-user"></i> Free Festival T-Shirt</li>
                        <li><i className="fa fa-ticket"></i> Free Admission To Fundraisers</li>
                        <li><i className="fa fa-address-book"></i>  Acknowledgement in Pride Guide (if desired)</li>
                        <li><i className="fa fa-star-o"></i> Free Admission to Prism Party</li>

                    </ul>
                </div>
            </div>
        </div>)
    }
    FriendsYearly() {
        return (<div className="col-12 col-lg-6">
            <div className="price-table price-table-success wow zoomInDown animation-delay-2">
                <header className="price-table-header">
                    <span className="price-table-category">Annually</span>
                    <h3><sup>$</sup>120.00 <sub>/yr.</sub></h3>
                </header>
                <div className="price-table-body">
                    <ul className="price-table-list">
                        <li><i className="fa fa-user"></i> Free Festival T-Shirt</li>
                        <li><i className="fa fa-ticket"></i> Free Admission To Fundraisers</li>
                        <li><i className="fa fa-address-book"></i>  Acknowledgement in Pride Guide (if desired)</li>
                        <li><i className="fa fa-star-o"></i> Free Admission to Prism Party</li>
                    </ul>
                </div>
            </div>
        </div>)
    }

    render() {
        return (
            <div>
                <div className="ms-hero-page-override ms-hero-img-parade ms-hero-bg-primary">
                    <div className="container">
                        <div className="text-center">
                            <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">
                                Friends of Pride</h1>
                            <p className="lead lead-sm color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">
                                At Charleston Pride, we believe that we can make a big difference in our community with a little help from our friends. Become an official <span className="color-warning">Friend of Pride</span> through joining our monthly donor program. <span className="color-warning">Friends of Pride</span> get exclusive access to many of our events and some extra perks along the way.</p>
                        </div>
                    </div>
                </div>
                <div className="container card-hero">
                    <div className="bg-white mt-2">
                        <div className="container">
                            <div className="text-center">
                                <h1>Giving Options</h1>
                            </div>
                            <div className="row">
                                <this.FriendsMonthly />
                                <this.FriendsYearly />
                            </div>
                        </div>
                        <ETap form="FriendsOfPride" title="friends-of-pride" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Friends;