import React, { Component } from 'react'

export default class SidebarTab extends Component {
  render() {
    return (
        <li className="card" role="tab" id={"sch"+this.props.key}>
            <a className="collapsed" role="button" data-toggle="collapse" href={'#sc'+ this.props.key}
                aria-expanded="false" aria-controls={"sc" + this.props.key}>
                <i className={"fa " + this.props.icon}></i> {this.props.title}</a>
            <ul id={"sc"+this.props.key} className="card-collapse collapse" role="tabpanel" aria-labelledby={"sch"+this.props.key}
                data-parent="#slidebar-menu">
            {this.props.children}
            </ul>
        </li>
    )
  }
}
