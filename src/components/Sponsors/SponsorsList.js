import React from "react";
import helper from "../Helper"
import { Link } from 'react-router-dom';

export default class SponsorsList extends React.Component {

    render(props) {
    return (
    <div className={"card card-"+helper(this.props.level)}>
        <div className="card-header">
            <h2 className="card-title">{this.props.level} Level Sponsors</h2>
        </div>
        <div className="card-body">
            <div className="row">
            {this.props.children}
            </div>
        </div>
    </div>)
    }
}