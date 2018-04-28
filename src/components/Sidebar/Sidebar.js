import React from 'react';
import {Link} from 'react-router-dom';
import './Sidebar.css';
import SidebarLink from "./SidebarLink";
import SidebarTab from "./SidebarTab";
import SidebarSocial from "./SidebarSocial";

class Sidebar extends React.Component {
    render() {
        return (
            <div className="ms-slidebar sb-slidebar sb-left sb-style-overlay" id="ms-slidebar">
                <div className="sb-slidebar-container">
                    <header className="ms-slidebar-header"></header>
                    <ul className="ms-slidebar-menu" id="slidebar-menu" role="tablist" aria-multiselectable="true">
                        <SidebarTab title="Test" icon="zmdi-edit" key="1">
                            <li><a href="portfolio-filters_sidebar.html">Portfolio Sidebar Filters</a></li>
                            <li><a href="portfolio-filters_topbar.html">Portfolio Topbar Filters</a></li>
                            <li><a href="portfolio-filters_sidebar_fluid.html">Portfolio Sidebar Fluid</a></li>
                        </SidebarTab>
                        <SidebarLink to="/sponsors" title="Sponsors" icon="zmdi-link" />
                    </ul>
                    <SidebarSocial/>
                </div>
            </div>

        );
    }
}
export default Sidebar;