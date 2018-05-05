import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SponsorDefault extends Component {
  render() {
    return (

        <div className="ms-thumbnail-container">
            <div className="text-center">
                <span className={"ms-icon ms-icon-circle ms-icon-xxlg mb-4 color-"+this.props.cardColor}><i className="fa fa-heart"></i></span>
                <Link to="/sponsorships" className={"btn btn-raised btn-block btn-"+this.props.cardColor}><i className="zmdi zmdi-heart"></i>Become a Sponsor</Link>
            </div>
        </div>
    )
  }
}
