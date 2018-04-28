import React from "react";
import Sponsor from "./SponsorHeroItem"
import { Link } from 'react-router-dom';
import firebase from "../../firebase"

export default class SponsorHero extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sponsors: [],
            timerID: null
        }
    }

    componentDidMount() {
        const itemsRef = firebase.database().ref('sponsors');
        itemsRef.once('value', (snapshot) => {
            snapshot.forEach(childSnapShot => {
                let sponsor = { id: childSnapShot.key, meta: childSnapShot.val() };
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

            });
            this.timerID = setInterval(
                () => this.tick(),
                3000
            );
        });
    }



    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        let [first, ...rest] = this.state.sponsors;
        let sponsors = [...rest, first];
        this.setState({ sponsors: sponsors });
    }

    render() {
        return (
            <div className="container text-center">
                <h2>Thank You to Our Sponsors</h2>
                <div className="row">
                    {this.state.sponsors && this.state.sponsors.slice(0, 6).map(s => <Sponsor key={s.id} meta={s.meta} />)}
                </div>
                <Link to="/sponsorships" className="btn btn-success btn-raised" > <i className="zmdi zmdi-thumb-up"></i>Become a sponsor</Link>
                <Link to="/sponsors" className="btn btn-info btn-raised" > <i className="zmdi zmdi-eye"></i>View All Sponsors</Link>
            </div>)
    }
}