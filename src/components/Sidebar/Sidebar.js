import React from 'react'
import './Sidebar.css'
import SidebarTab from "./SidebarTab"
import SidebarSocial from "./SidebarSocial"
import { Link } from 'react-router-dom'

class Sidebar extends React.Component {

    SidebarButton(props) {
        return (
            props.to.startsWith("/") ?
                <Link className={"btn btn-raised btn-block btn-" + props.background} to={props.to}><i className={"fa " + props.icon}></i> {props.title}</Link>
                : <a target="_blank" rel="noopener noreferrer" className={"btn btn-raised btn-block btn-" + props.background} href={props.to}><i className={"fa " + props.icon}></i> {props.title}</a>
        )
    }

    render(props) {
        return (
            <div className="ms-slidebar sb-slidebar sb-left sb-style-overlay" id="ms-slidebar">
                <div className="sb-slidebar-container">
                    <header className="ms-slidebar-header"></header>
                    {this.props.bottom.map(b => <this.SidebarButton key={b.key} to={b.to} icon={b.icon} title={b.title} background={b.background} />)}
                    <ul className="ms-slidebar-menu" id="slidebar-menu" role="tablist" aria-multiselectable="true">
                        {this.props.top.map(e => <SidebarTab key={e.key} tabkey={e.key} icon={e.icon} title={e.title} pages={e.pages} />)}
                    </ul>
                    <SidebarSocial />
                </div>
            </div>
        );
    }
}
export default Sidebar;