import React from "react";
import Sponsor from "./Sponsor";
import SponsorDefault from "./SponsorDefault";

export default class SponsorsList extends React.Component {

    render(props) {
    return (
    <div className={"card card-"+this.props.cardColor+"-inverse"}>
        <div className="card-header">
            <h2 className="card-title">{this.props.sponsorshipLevel} Level Sponsors</h2>
        </div>
        <div className="card-body">
                <div className="row justify-content-center">
                {this.props.sponsors.map(s => <Sponsor key={s.id} meta={s} />)}
                {this.props.sponsors.length === 0 &&
                <SponsorDefault cardColor={this.props.cardColor}/>}
            </div>
        </div>
    </div>)
    }
}