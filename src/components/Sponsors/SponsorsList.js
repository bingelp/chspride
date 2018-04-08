import React from "react";
import helper from "../Helper"
import { Link } from 'react-router-dom';

export default class SponsorsList extends React.Component {

    render(props) {
    return (
    <div className={"panel panel-"+helper(this.props.level)}>
        <div className="panel-heading">
            <h2 className="panel-title">{this.props.level} Level Sponsors</h2>
        </div>
        <div className="panel-body">
            <div className="row">
            {this.props.children}
            </div>

        </div>
    </div>)
    }
}