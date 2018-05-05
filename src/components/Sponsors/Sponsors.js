import React from "react";
import SponsorsList from "./SponsorsList";
import "./Sponsors.css";
import helper from "../Helper"
import firebase from "../../firebase";
import {Link} from 'react-router-dom'

export default class Sponsors extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sponsors: []
        }
    }

    componentDidMount() {
        const itemsRef = firebase.database().ref('sponsors');
        itemsRef.once('value', (snapshot) => {
            snapshot.forEach(childSnapShot => {
                let sponsor = {id: childSnapShot.key, meta: childSnapShot.val()};
                let storageRef = firebase.storage().ref();
                let logoRef = storageRef.child('sponsors/' + sponsor.meta.logo);
                logoRef.getDownloadURL().then(url => {
                        sponsor.meta.logoPath = url;
                        this.state.sponsors.push(sponsor);
                        this.setState({
                            sponsors: this.state.sponsors
                        })
                    }
                ).catch(error => {
                    this.setState(
                        {
                            error: "Error: " + error.code
                        }
                    )
                })

            })
        });
    }

    render(props) {
        return (
            <div>
                <div className="ms-hero-sponsors ms-hero-bg-royal">
                    <div className="container">
                        <div className="text-center">
                            <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">Our
                                Sponsors Make It Possible</h1>
                            <Link to="/sponsorships" className="btn btn-raised btn-info animated fadeInUp animation-delay-10">
                                <i className="fa fa-heart"></i> Become a Sponsor</Link>
                        </div>
                    </div>
                </div>
                <div id="sponsors" className="container">
                    <SponsorsList sponsorshipLevel="Red" cardColor={helper(1)}
                                    sponsors={this.state.sponsors.filter(s => s.meta.level === 1)}/>
                    <SponsorsList sponsorshipLevel="Orange" cardColor={helper(2)}
                                    sponsors={this.state.sponsors.filter(s => s.meta.level === 2)}/>
                    <SponsorsList sponsorshipLevel="Yellow" cardColor={helper(3)}
                                    sponsors={this.state.sponsors.filter(s => s.meta.level === 3)}/>
                    <SponsorsList sponsorshipLevel="Green" cardColor={helper(4)}
                                    sponsors={this.state.sponsors.filter(s => s.meta.level === 4)}/>
                    <SponsorsList sponsorshipLevel="Blue" cardColor={helper(5)}
                                    sponsors={this.state.sponsors.filter(s => s.meta.level === 5)}/>
                    <SponsorsList sponsorshipLevel="Purple" cardColor={helper(6)}
                                    sponsors={this.state.sponsors.filter(s => s.meta.level === 6)}/>
                </div>
            </div>)
    }
}