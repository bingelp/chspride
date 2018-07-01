import React from 'react'
import './Sidebar.css'
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
                        <SidebarTab title="About Us" icon="fa-flag-o" tabkey="about-us">
                            <SidebarTabLink to="/board-of-directors" title="Board Of Directors" icon="fa-group" />
                            <SidebarTabLink to="/bylaws" title="Bylaws" icon="fa-legal" />
                            <SidebarTabLink to="/serve-on-the-board" title="Serve on the Board" icon="fa-user-plus" />
                            <SidebarTabLink to="/board-roles" title="Board Roles" icon="fa-puzzle-piece" />
                            {/* <SidebarTabLink to="/contact-us" title="Contact Us" icon="fa-envelope-o" /> */}
                        </SidebarTab>
                        <SidebarTab title="Sponsors" icon="fa-heart-o" tabkey="sponsors">
                            <SidebarTabLink to="/our-sponsors" title="2018 Sponsors" icon="fa-heart" />
                            <SidebarTabLink to="/become-a-sponsor" title="Become a Sponsor" icon="fa-handshake-o" />
                        </SidebarTab>
                        <SidebarTab title="Get Involved" icon="fa-thumbs-o-up" tabkey="get-involved">
                            <SidebarTabLink title="Become a Friend of Pride" to="/friends-of-pride" icon="fa-star" />
                            <SidebarTabLink to="/join-our-mailing-list" title="Join our Mailing List" icon="fa-envelope" />
                            <SidebarTabLink to="/volunteer" title="Volunteer" icon="fa-smile-o" />
                            <SidebarTabLink to="/serve-on-the-board" title="Serve on the Board" icon="fa-user-plus" />
                            <SidebarTabLink to="/purchase-pride-guide-ad" title="Purchase a Pride Guide Ad" icon="fa-book" />
                            <SidebarTabLink to="/vendor-registration" title="Register to Be a Vendor" icon="fa-map-marker" />
                            <SidebarTabLink to="/participate-in-parade" title="Partcipate in Parade" icon="fa-flag" />
                        </SidebarTab>
                        <SidebarTab title="Events" icon="fa-calendar-o" tabkey="events">
                            <SidebarTabLink to="http://toasttoequality.com/?utm_source=charleston_pride" title="Toast to Equality" icon="fa-glass" />
                            <SidebarTabLink to="/events/rainbows" title="Rainbows Pride Night" icon="fa-trophy" />
                            <SidebarTabLink to="/events/pride/festival" title="Festival Information" icon="fa-map" />
                            <SidebarTabLink to="/events/pride/parade" title="Parade Information" icon="fa-flag" />
                        </SidebarTab>
                    </ul>
                    <SidebarSocial/>
                </div>
            </div>
        );
    }
}
export default Sidebar;