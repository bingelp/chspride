import React, { Component } from 'react'

export default class Section extends Component {
  render() {
    return (
        <div>
            <div className="ms-hero-page-override ms-hero-img-city ms-hero-bg-primary">
                <div className="container">
                    <div className="text-center">
                        <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">{this.props.title}</h1>
                        <p className="lead lead-sm color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">{this.props.subtitle}</p>
                    </div>
                </div>
            </div>
            <div className="container">
                {this.props.children}
            </div>
        </div>
    )
  }
}
