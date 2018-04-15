import React from "react";
import Sponsor from "./SponsorHeroItem"
import { Link } from 'react-router-dom';
import firebase from "../../firebase"

export default class SponsorHero extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sponsors: [],
            isLoaded: false,
            timerID: null
        }
    }

    componentDidMount() {
        const itemsRef = firebase.database().ref('sponsors').orderByChild("level");
        itemsRef.once('value', (snapshot) => {
            snapshot.forEach(childSnapShot => {
                let sponsor = { id: childSnapShot.key, details: childSnapShot.val() };
                this.state.sponsors.push(sponsor);
                this.setState({
                    isLoaded: true,
                    sponsors: this.state.sponsors
                })
            })
        });
        this.timerID = setInterval(
            () => this.tick(),
            3000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
      }

    tick(){
        let [first, ...rest] = this.state.sponsors;
        let sponsors = [...rest, first];
        this.setState({sponsors: sponsors});
    }

    render() {
        const { isLoaded, sponsors } = this.state;
            return (
                <div className="container text-center">
                    <h2>Thank You to Our Sponsors</h2>
                    <div className="row">
                        {isLoaded && sponsors.slice(0,6).map(s => <Sponsor key={s.id} name={s.details.name} level={s.details.level} url={s.details.url} logo={s.details.logo} description={s.details.description} />)}
                    </div>
                    <Link to="/sponsorships" className="btn btn-success btn-raised" > <i className="zmdi zmdi-thumb-up"></i>Become a sponsor</Link>
                    <Link to="/sponsors" className="btn btn-info btn-raised" > <i className="zmdi zmdi-eye"></i>View All Sponsors</Link>
                    <button className="btn btn-warning btn-raised" onClick={() => this.tick()}> Tick</button>
                </div>)
    }
}