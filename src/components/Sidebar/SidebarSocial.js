import React, { Component } from 'react'

export default class SidebarSocial extends Component {
  render() {
    return (
        <div className="ms-slidebar-social ms-slidebar-block">
            <h4 className="ms-slidebar-block-title">Connect With Us</h4>
            <div className="ms-slidebar-social">
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/charlestonpride"
                    className="btn-circle btn-circle-raised btn-facebook">
                    <i className="zmdi zmdi-facebook"></i>
                    <div className="ripple-container"></div>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/charlestonpride"
                    className="btn-circle btn-circle-raised btn-twitter">
                    <i className="zmdi zmdi-twitter"></i>
                    <div className="ripple-container"></div>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/charlestonpride/"
                    className="btn-circle btn-circle-raised btn-instagram">
                    <i className="zmdi zmdi-instagram"></i>
                    <div className="ripple-container"></div>
                </a>
            </div>
        </div>
    )
  }
}
