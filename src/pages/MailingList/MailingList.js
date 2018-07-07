import React, { Component } from 'react'
import ETap from '../../components/ETapestryForm'

export default class MailingList extends Component {
  render() {
      var headerClass = "no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5"
      var heroClass = "lead lead-sm color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7"
      return (
        <div>
            <div className="ms-hero-page-override ms-hero-img-city ms-hero-bg-info">
                <div className="container">
                    <div className="text-center">
                        <h1 className={headerClass}>Join our Mailing List</h1>
                        <h2 className={headerClass}>Be in the know about all things Charleston Pride!</h2>
                        <p className={heroClass}>By filling out the form below you are signing up to receive our newsletter and announcements for upcoming events.</p>
                    </div>
                </div>
            </div>
            <div className="container card-hero">
                <div className="card">
                    <div className="card-body">
                        <ETap title="Mailing List" form="emailsignup" />
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
