import React, { Component } from 'react'

export default class SidebarTab extends Component {
  render() {
    return (
        <li className="card" role="tab" id={"sch"+this.props.tabkey}>
            <a className="collapsed" role="button" data-toggle="collapse" href={'#sc'+ this.props.tabkey}
                aria-expanded="false" aria-controls={"sc" + this.props.tabkey}>
                <i className={"fa " + this.props.icon}></i> {this.props.title}</a>
            <ul id={"sc"+this.props.tabkey} className="card-collapse collapse" role="tabpanel" aria-labelledby={"sch"+this.props.tabkey}
                data-parent="#slidebar-menu">
            {this.props.children}
            </ul>
        </li>
    )
  }
}
