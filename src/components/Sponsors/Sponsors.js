import React from "react";
import SponsorsList from "./SponsorsList";
import "./Sponsors.css";
import helper from "../Helper"
import firebase from "../../firebase";

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
                        </div>
                    </div>
                </div>
                <div id="sponsors" className="container">
                    <div id="sponsors" className="container">
                        <SponsorsList sponsorshipLevel="Red" class={helper(1)}
                                      sponsors={this.state.sponsors.filter(s => s.meta.level === 1)}/>
                        <SponsorsList sponsorshipLevel="Orange" class={helper(2)}
                                      sponsors={this.state.sponsors.filter(s => s.meta.level === 2)}/>
                        <SponsorsList sponsorshipLevel="Yellow" class={helper(3)}
                                      sponsors={this.state.sponsors.filter(s => s.meta.level === 3)}/>
                        <SponsorsList sponsorshipLevel="Green" class={helper(4)}
                                      sponsors={this.state.sponsors.filter(s => s.meta.level === 4)}/>
                        <SponsorsList sponsorshipLevel="Blue" class={helper(5)}
                                      sponsors={this.state.sponsors.filter(s => s.meta.level === 5)}/>
                        <SponsorsList sponsorshipLevel="Purple" class={helper(6)}
                                      sponsors={this.state.sponsors.filter(s => s.meta.level === 6)}/>
                    </div>
                </div>
            </div>)
    }
}