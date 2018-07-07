import React, { Component } from 'react'

export default class SidebarSocial extends Component {

    Button(props) {
        return (
            <a target="_blank" rel="noopener noreferrer" href={"https://www." + props.site + ".com/charlestonpride"}
                className={"btn-circle btn-circle-raised btn-" + props.site}>
                <i className={"zmdi zmdi-" + props.site}></i>
                <div className="ripple-container"></div>
            </a>)
    }
    render() {
        return (
            <div className="ms-slidebar-social ms-slidebar-block">
                <h4 className="ms-slidebar-block-title">Connect With Us</h4>
                <div className="ms-slidebar-social">
                    <this.Button site="facebook" />
                    <this.Button site="twitter" />
                    <this.Button site="instagram" />
                </div>
            </div>
        )
    }
}
