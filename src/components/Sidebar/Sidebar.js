import React from 'react'
import './Sidebar.css'
import SidebarLink from "./SidebarLink"
import SidebarTab from "./SidebarTab"
import SidebarSocial from "./SidebarSocial"
import SidebarTabLink from "./SidebarTabLink"

class Sidebar extends React.Component {
    render() {
        return (
            <div className="ms-slidebar sb-slidebar sb-left sb-style-overlay" id="ms-slidebar">
                <div className="sb-slidebar-container">
                    <header className="ms-slidebar-header"></header>
                    <ul className="ms-slidebar-menu" id="slidebar-menu" role="tablist" aria-multiselectable="true">
                        <SidebarLink to="/sponsors" title="Our Sponsors" icon="fa-heart" />
                        <SidebarLink to="/sponsorships" title="Become a Sponsor" icon="fa-handshake-o" />
                        <SidebarTab title="About Us" icon="fa-user-circle" tabkey="1">
                            <SidebarTabLink to="/about/board" title="Board Of Directors" icon="fa-group" />
                            <SidebarTabLink to="/about/bylaws" title="Bylaws" icon="fa-legal" />
                        </SidebarTab>
                    </ul>
                    <SidebarSocial/>
                </div>
            </div>
        );
    }
}
export default Sidebar;