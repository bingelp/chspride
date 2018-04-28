import React from 'react';
import {Link, NavLink} from 'react-router-dom';

class Nav extends React.Component {
    render() {
      return (
          <nav className="navbar navbar-expand-md  navbar-static ms-navbar">
              <div className="container container-full">
                  <div className="navbar-header">
                      <a className="navbar-brand" href="index.html">
                          <span className="ms-logo ms-logo-sm">M</span>
                          <span className="ms-title">Material <strong>Style</strong></span>
                      </a>
                  </div>

                  <div className="collapse navbar-collapse" id="ms-navbar">
                      <ul className="navbar-nav">
                          <li className="nav-item dropdown active">
                              <a href="#" className="nav-link dropdown-toggle animated fadeIn animation-delay-7" data-toggle="dropdown" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false" data-name="home">Home <i className="zmdi zmdi-chevron-down"></i></a>
                              <ul className="dropdown-menu">
                                  <li className="ms-tab-menu">
                                      <ul className="nav nav-tabs ms-tab-menu-left" role="tablist">
                                          <li className="nav-item"><a className="nav-link active" href="#tab-general" data-hover="tab" data-toggle="tab" role="tab"><i className="zmdi zmdi-home"></i> General Purpose</a></li>
                                          <li className="nav-item"><a className="nav-link" href="#tab-landing" data-hover="tab" data-toggle="tab" role="tab"><i className="zmdi zmdi-desktop-windows"></i> Landing pages</a></li>
                                          <li className="nav-item"><a className="nav-link" href="#tab-revolution" data-hover="tab" data-toggle="tab" role="tab"><i className="zmdi zmdi-panorama-horizontal"></i> Slider Revolution</a></li>
                                          <li className="nav-item"><a className="nav-link" href="#tab-shop" data-hover="tab" data-toggle="tab" role="tab"><i className="zmdi zmdi-store"></i> Shop</a></li>
                                          <li className="nav-item"><a className="nav-link" href="#tab-profile" data-hover="tab" data-toggle="tab" role="tab"><i className="zmdi zmdi-account"></i> Professional Profile</a></li>
                                          <li className="nav-item"><a className="nav-link" href="#tab-blog" data-hover="tab" data-toggle="tab" role="tab"><i className="zmdi zmdi-edit"></i> Blog Template</a></li>
                                          <li className="nav-item"><a className="nav-link" href="#tab-magazine" data-hover="tab" data-toggle="tab" role="tab"><i className="zmdi zmdi-flip"></i> Magazine Template</a></li>
                                          <li className="nav-item"><a className="nav-link" href="#tab-app" data-hover="tab" data-toggle="tab" role="tab"><i className="zmdi zmdi-smartphone-iphone"></i> App Pages</a></li>
                                          <li className="nav-item"><a className="nav-link" href="#tab-ads" data-hover="tab" data-toggle="tab" role="tab"><i className="zmdi zmdi-search"></i> Classified Ads</a></li>
                                      </ul>

                                      <div className="tab-content ms-tab-menu-right">
                                          <div className="tab-pane active" id="tab-general" role="tabpanel">
                                              <ul className="ms-tab-menu-right-container">
                                                  <li><a href="index.html">Default Home</a></li>
                                                  <li><a href="home-generic-2.html">Home Black Slider</a></li>
                                                  <li><a href="home-generic-3.html">Home Browsers Intro</a></li>
                                                  <li><a href="home-generic-4.html">Home Mobile Intro</a></li>
                                                  <li><a href="home-generic-5.html">Home Material Icons</a></li>
                                                  <li><a href="home-generic-6.html">Home Typed Hero</a></li>
                                                  <li><a href="home-generic-7.html">Home Typed Hero 2</a></li>
                                              </ul>
                                          </div>
                                          <div className="tab-pane" id="tab-landing" role="tabpanel">
                                              <ul className="ms-tab-menu-right-container">
                                                  <li><a href="home-landing.html">Home Landing Intro</a></li>
                                                  <li><a href="home-landing2.html">Home Landing Intro 2</a></li>
                                                  <li><a href="home-landing4.html">Home Landing Intro 3</a></li>
                                                  <li><a href="home-landing3.html">Home Landing Video</a></li>
                                                  <li><a href="home-cv3.html">Home Profile Landing 1</a></li>
                                                  <li><a href="home-cv4.html">Home Profile Landing 2</a></li>
                                                  <li className="disable"><a href="javascript:void(0)">Landing Video 2 (Next Update)</a></li>
                                              </ul>
                                          </div>
                                          <div className="tab-pane" id="tab-revolution" role="tabpanel">
                                              <ul className="ms-tab-menu-right-container">
                                                  <li><a className="with-badge" href="home-revolution.html">Home Revolution Devices <span className="badge badge-success pull-right">1.3</span></a></li>
                                                  <li><a className="with-badge" href="home-revolution2.html">Home Revolution App <span className="badge badge-success pull-right">1.3</span></a></li>
                                                  <li><a className="with-badge" href="home-revolution3.html">Home Revolution Video <span className="badge badge-success pull-right">1.3</span></a></li>
                                                  <li><a className="with-badge" href="home-revolution4.html">Home Revolution Idea <span className="badge badge-success pull-right">1.3</span></a></li>
                                              </ul>
                                          </div>
                                          <div className="tab-pane" id="tab-shop" role="tabpanel">
                                              <ul className="ms-tab-menu-right-container">
                                                  <li><a href="home-shop.html">Home Shop 1</a></li>
                                                  <li><a href="home-shop2.html">Home Shop 2</a></li>
                                                  <li className="disable"><a href="javascript:void(0)">Home Shop 3 (Next Update)</a></li>
                                                  <li className="disable"><a href="javascript:void(0)">Home Shop 4 (Next Update)</a></li>
                                              </ul>
                                          </div>
                                          <div className="tab-pane" id="tab-profile" role="tabpanel">
                                              <ul className="ms-tab-menu-right-container">
                                                  <li><a href="home-cv.html">Home Profile 1</a></li>
                                                  <li><a href="home-cv2.html">Home Profile 2</a></li>
                                                  <li><a href="home-cv3.html">Home Profile Landing 1</a></li>
                                                  <li><a href="home-cv4.html">Home Profile Landing 2</a></li>
                                              </ul>
                                          </div>
                                          <div className="tab-pane" id="tab-blog" role="tabpanel">
                                              <ul className="ms-tab-menu-right-container">
                                                  <li><a href="home-blog.html">Home Blog 1</a></li>
                                                  <li><a href="home-blog2.html">Home Blog 2</a></li>
                                                  <li className="disable"><a href="javascript:void(0)">Home Blog 3 (Next Update)</a></li>
                                                  <li className="disable"><a href="javascript:void(0)">Home Blog 4 (Next Update)</a></li>
                                              </ul>
                                          </div>
                                          <div className="tab-pane" id="tab-magazine" role="tabpanel">
                                              <ul className="ms-tab-menu-right-container">
                                                  <li><a href="home-magazine.html">Home Magazine 1</a></li>
                                                  <li className="disable"><a href="javascript:void(0)">Magazine 2 (Next Update)</a></li>
                                                  <li className="disable"><a href="javascript:void(0)">Magazine 3 (Next Update)</a></li>
                                                  <li className="disable"><a href="javascript:void(0)">Magazine 4 (Next Update)</a></li>
                                              </ul>
                                          </div>
                                          <div className="tab-pane" id="tab-app" role="tabpanel">
                                              <ul className="ms-tab-menu-right-container">
                                                  <li><a href="home-app.html">Home App 1</a></li>
                                                  <li><a href="home-app2.html">Home App 2</a></li>
                                                  <li className="disable"><a href="javascript:void(0)">Home App 3 (Next Update)</a></li>
                                                  <li className="disable"><a href="javascript:void(0)">Home App 4 (Next Update)</a></li>
                                              </ul>
                                          </div>
                                          <div className="tab-pane" id="tab-ads" role="tabpanel">
                                              <ul className="ms-tab-menu-right-container">
                                                  <li><a href="home-class.html">Home Classifieds 1</a></li>
                                                  <li className="disable"><a href="javascript:void(0)">Classifieds 2 (Next Update)</a></li>
                                                  <li className="disable"><a href="javascript:void(0)">Classifieds 3 (Next Update)</a></li>
                                              </ul>
                                          </div>
                                      </div>
                                  </li>
                              </ul>
                          </li>
                          <li className="nav-item dropdown">
                              <a href="#" className="nav-link dropdown-toggle animated fadeIn animation-delay-7" data-toggle="dropdown" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false" data-name="page">Pages <i className="zmdi zmdi-chevron-down"></i></a>
                              <ul className="dropdown-menu">
                                  <li className="dropdown-submenu">
                                      <a href="javascript:void(0)" className="dropdown-item has_children">About us &amp; Team</a>
                                      <ul className="dropdown-menu dropdown-menu-left">
                                          <li><a className="dropdown-item" href="page-about.html">About us Option 1</a></li>
                                          <li><a className="dropdown-item" href="page-about2.html">About us Option 2</a></li>
                                          <li><a className="dropdown-item" href="page-about3.html">About us Option 3</a></li>
                                          <li><a className="dropdown-item" href="page-about4.html">About us Option 4</a></li>
                                          <li className="dropdown-divider"></li>
                                          <li><a className="dropdown-item" href="page-team.html">Our Team Option 1</a></li>
                                          <li><a className="dropdown-item" href="page-team2.html">Our Team Option 2</a></li>
                                      </ul>
                                  </li>
                                  <li className="dropdown-submenu">
                                      <a href="javascript:void(0)" className="has_children dropdown-item">Form</a>
                                      <ul className="dropdown-menu">
                                          <li><a className="dropdown-item" href="page-contact.html">Contact Option 1</a></li>
                                          <li><a className="dropdown-item" href="page-contact2.html">Contact Option 2</a></li>
                                          <li className="dropdown-divider"></li>
                                          <li><a className="dropdown-item" href="page-login_register.html">Login &amp; Register</a></li>
                                          <li><a className="dropdown-item" href="page-login.html">Login Full</a></li>
                                          <li><a className="dropdown-item" href="page-login2.html">Login Integrated</a></li>
                                          <li className="dropdown-divider"></li>
                                          <li><a className="dropdown-item" href="page-login_register2.html">Register Option 1</a></li>
                                          <li><a className="dropdown-item" href="page-register2.html">Register Option 2</a></li>
                                      </ul>
                                  </li>
                                  <li className="dropdown-submenu">
                                      <a href="javascript:void(0)" className="has_children dropdown-item">Profiles</a>
                                      <ul className="dropdown-menu dropdown-menu-left">
                                          <li><a className="dropdown-item" href="page-profile.html">User Profile Option 1</a></li>
                                          <li><a className="dropdown-item" href="page-profile2.html">User Profile Option 2</a></li>
                                      </ul>
                                  </li>
                                  <li className="dropdown-submenu">
                                      <a href="javascript:void(0)" className="has_children dropdown-item">Error</a>
                                      <ul className="dropdown-menu dropdown-menu-left">
                                          <li><a className="dropdown-item" href="page-404.html">Error 404 Full Page</a></li>
                                          <li><a className="dropdown-item" href="page-404_2.html">Error 404 Integrated</a></li>
                                          <li><a className="dropdown-item" href="page-500.html">Error 500 Full Page</a></li>
                                          <li><a className="dropdown-item" href="page-500_2.html">Error 500 Integrated</a></li>
                                      </ul>
                                  </li>
                                  <li className="dropdown-submenu">
                                      <a href="javascript:void(0)" className="has_children dropdown-item">Bussiness &amp; Products</a>
                                      <ul className="dropdown-menu dropdown-menu-left">
                                          <li><a className="dropdown-item" href="page-testimonial.html">Testimonials</a></li>
                                          <li><a className="dropdown-item" href="page-clients.html">Our Clients</a></li>
                                          <li><a className="dropdown-item" href="page-product.html">Products</a></li>
                                          <li><a className="dropdown-item" href="page-services.html">Services</a></li>
                                      </ul>
                                  </li>
                                  <li className="dropdown-submenu">
                                      <a href="javascript:void(0)" className="has_children dropdown-item">Pricing</a>
                                      <ul className="dropdown-menu dropdown-menu-left">
                                          <li><a className="dropdown-item" href="page-pricing.html">Pricing Box</a></li>
                                          <li><a className="dropdown-item" href="page-pricing2.html">Pricing Box 2</a></li>
                                          <li><a className="dropdown-item" href="page-princing_table.html">Pricing Mega Table</a></li>
                                      </ul>
                                  </li>
                                  <li className="dropdown-submenu">
                                      <a href="javascript:void(0)" className="has_children dropdown-item">FAQ &amp; Support</a>
                                      <ul className="dropdown-menu dropdown-menu-left">
                                          <li><a className="dropdown-item" href="page-support.html">Support Center</a></li>
                                          <li><a className="dropdown-item" href="page-faq.html">FAQ Option 1</a></li>
                                          <li><a className="dropdown-item" href="page-faq2.html">FAQ Option 2</a></li>
                                      </ul>
                                  </li>
                                  <li className="dropdown-submenu">
                                      <a href="javascript:void(0)" className="has_children dropdown-item">Coming Soon</a>
                                      <ul className="dropdown-menu dropdown-menu-left">
                                          <li><a className="dropdown-item" href="page-coming.html">Coming Soon Option 1</a></li>
                                          <li><a className="dropdown-item" href="page-coming2.html">Coming Soon Option 2</a></li>
                                          <li><a className="dropdown-item" href="page-coming3.html">Coming Soon Option 3</a></li>
                                      </ul>
                                  </li>
                                  <li className="dropdown-submenu">
                                      <a href="javascript:void(0)" className="has_children dropdown-item">Timeline</a>
                                      <ul className="dropdown-menu dropdown-menu-left">
                                          <li><a className="dropdown-item" href="page-timeline_left.html">Timeline Left</a></li>
                                          <li><a className="dropdown-item" href="page-timeline_left2.html">Timeline Left 2</a></li>
                                          <li><a className="dropdown-item" href="page-timeline.html">Timeline Center</a></li>
                                      </ul>
                                  </li>
                                  <li className="dropdown-submenu">
                                      <a href="javascript:void(0)" className="has_children dropdown-item">Email Templates</a>
                                      <ul className="dropdown-menu dropdown-menu-left">
                                          <li><a className="dropdown-item with-badge" href="page-email.html">Email Template 1 <span className="badge badge-success text-right">1.2</span></a></li>
                                  <li><a className="dropdown-item with-badge" href="page-email2.html">Email Template 2 <span className="badge badge-success text-right">1.2</span></a></li>
                      </ul>
                  </li>
                  <li><a className="dropdown-item" href="page-all.html" className="dropdown-link">All Pages</a></li>
              </ul>
          </li>
        <li className="nav-item dropdown dropdown-megamenu-container">
            <a href="#" className="nav-link dropdown-toggle animated fadeIn animation-delay-7" data-toggle="dropdown" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false" data-name="component">UI Elements <i className="zmdi zmdi-chevron-down"></i></a>
            <ul className="dropdown-menu dropdown-megamenu animated fadeIn animated-2x">
                <li className="container">
                    <div className="row">
                        <div className="col-sm-3 megamenu-col">
                            <div className="megamenu-block animated fadeInLeft animated-2x">
                                <h3 className="megamenu-block-title"><i className="fa fa-bold"></i> Bootstrap CSS</h3>
                                <ul className="megamenu-block-list">
                                    <li>
                                        <a className="withripple" href="component-typography.html"><i className="fa fa-font"></i> Typography</a>
                                    </li>
                                    <li>
                                        <a className="withripple" href="component-headers.html"><i className="fa fa-header"></i> Headers</a>
                                    </li>
                                    <li>
                                        <a className="withripple" href="component-dividers.html"><i className="fa fa-arrows-h"></i> Dividers</a>
                                    </li>
                                    <li>
                                        <a className="withripple" href="component-blockquotes.html"><i className="fa fa-quote-right"></i> Blockquotes</a>
                                    </li>
                                    <li>
                                        <a className="withripple" href="component-forms.html"><i className="fa fa-check-square-o"></i> Forms <span className="badge badge-info pull-right"><i className="zmdi zmdi-long-arrow-up no-mr"></i> 1.5</span></a>
                                    </li>
                                    <li>
                                        <a className="withripple" href="component-slider.html">
                                            <i className="fa fa-sliders"></i> Sliders <span className="badge badge-success pull-right">2.3</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="withripple" href="component-tables.html"><i className="fa fa-table"></i> Tables</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="megamenu-block animated fadeInLeft animated-2x">
                                <h3 className="megamenu-block-title"><i className="fa fa-hand-o-up"></i> Buttons</h3>
                                <ul className="megamenu-block-list">
                                    <li>
                                        <a className="withripple" href="component-basic-buttons.html">
                                            <i className="fa fa-arrow-circle-right"></i> Basic Buttons</a>
                                    </li>
                                    <li>
                                        <a className="withripple" href="component-buttons-components.html">
                                            <i className="fa fa-arrow-circle-right"></i> Buttons Components</a>
                                    </li>
                                    <li>
                                        <a className="withripple" href="component-social-buttons.html">
                                            <i className="fa fa-arrow-circle-right"></i> Social Buttons <span className="badge badge-info pull-right"><i className="zmdi zmdi-long-arrow-up no-mr"></i> 1.3</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-3 megamenu-col">
                            <div className="megamenu-block animated fadeInLeft animated-2x">
                                <h3 className="megamenu-block-title"><i className="fa fa-list-alt"></i> Basic Components</h3>
                                <ul className="megamenu-block-list">
                                    <li>
                                        <a className="withripple" href="component-panels.html">
                                            <i className="zmdi zmdi-view-agenda"></i> Panels</a>
                                    </li>
                                    <li>
                                        <a className="withripple" href="component-alerts.html">
                                            <i className="zmdi zmdi-info"></i> Alerts &amp; Wells</a>
                                    </li>
                                    <li>
                                        <a className="withripple" href="component-badges.html">
                                            <i className="zmdi zmdi-tag"></i> Badges &amp; Badges Pills</a>
                                    </li>
                                    <li>
                                        <a className="withripple" href="component-lists.html">
                                            <i className="zmdi zmdi-view-list"></i> Lists</a>
                                    </li>
                                    <li>
                                        <a className="withripple" href="component-thumbnails.html">
                                            <i className="zmdi zmdi-image-o"></i> Thumbnails</a>
                                    </li>
                                    <li>
                                        <a className="withripple" href="component-carousels.html">
                                            <i className="zmdi zmdi-view-carousel"></i> Carousels</a>
                                    </li>
                                    <li>
                                        <a className="withripple" href="component-modals.html">
                                            <i className="zmdi zmdi-window-maximize"></i> Modals</a>
                                    </li>
                                    <li>
                                        <a className="withripple" href="component-tooltip.html">
                                            <i className="zmdi zmdi-pin-help"></i> Tooltip &amp; Popover</a>
                                    </li>
                                    <li>
                                        <a className="withripple" href="component-progress-bars.html">
                                            <i className="zmdi zmdi-view-headline"></i> Progress Bars</a>
                                    </li>
                                    <li>
                                        <a className="withripple" href="component-pagination.html">
                                            <i className="zmdi zmdi-n-2-square"></i> Pagination</a>
                                    </li>
                                    <li>
                                        <a className="withripple" href="component-breadcrumb.html">
                                            <i className="zmdi zmdi-label-alt-outline"></i> Breadcrumb <span className="badge badge-success pull-right">2.2</span></a>
                                    </li>
                                    <li>
                                        <a className="withripple" href="component-dropdowns.html">
                                            <i className="fa fa-info"></i> Dropdowns</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-sm-3 megamenu-col">
                            <div className="megamenu-block animated fadeInRight animated-2x">
                                <h3 className="megamenu-block-title"><i className="zmdi zmdi-folder-star-alt"></i> Extra Components</h3>
                                <ul className="megamenu-block-list">
                                    <li>
                                        <a className="withripple" href="component-cards.html">
                                            <i className="zmdi zmdi-card-membership"></i> Cards</a>
                                    </li>
                                    <li>
                                        <a className="withripple" href="component-composite-cards.html">
                                            <i className="zmdi zmdi-card-giftcard"></i>  Composite Cards</a>
                                    </li>
                                    <li>
                                        <a className="withripple" href="component-counters.html">
                                            <i className="zmdi zmdi-n-6-square"></i> Counters</a>
                                    </li>
                                    <li>
                                        <a className="withripple" href="component-audio-video.html">
                                            <i className="zmdi zmdi-play-circle"></i> Audio &amp; Video <span className="badge badge-info pull-right"><i className="zmdi zmdi-long-arrow-up no-mr"></i> 2.3</span></a>
                                    </li>
                                    <li>
                                        <a className="withripple" href="component-masonry.html">
                                            <i className="zmdi zmdi-view-dashboard"></i> Masonry Layer</a>
                                    </li>
                                    <li>
                                        <a className="withripple" href="component-snackbar.html">
                                            <i className="zmdi zmdi-notifications-active"></i> SnackBar <span className="badge badge-success pull-right">1.2</span></a>
                                    </li>
                                    <li>
                                        <a className="withripple" href="component-lightbox.html">
                                            <i className="zmdi zmdi-collection-image-o"></i> Lightbox <span className="badge badge-success pull-right">1.5</span></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="megamenu-block animated fadeInRight animated-2x">
                                <h3 className="megamenu-block-title"><i className="zmdi zmdi-tab"></i> Collapses &amp; Tabs</h3>
                                <ul className="megamenu-block-list">
                                    <li>
                                        <a className="withripple" href="component-collapses.html">
                                            <i className="zmdi zmdi-view-day"></i> Collapses</a>
                                    </li>
                                    <li>
                                        <a className="withripple" href="component-horizontal-tabs.html">
                                            <i className="zmdi zmdi-tab"></i> Horitzontal Tabs</a>
                                    </li>
                                    <li>
                                        <a className="withripple" href="component-vertical-tabs.html">
                                            <i className="zmdi zmdi-menu"></i> Vertical Tabs</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-3 megamenu-col">
                            <div className="megamenu-block animated fadeInRight animated-2x">
                                <h3 className="megamenu-block-title"><i className="fa fa-briefcase"></i> Icons</h3>
                                <ul className="megamenu-block-list">
                                    <li>
                                        <a className="withripple" href="component-icons-basic.html">
                                            <i className="fa fa-arrow-circle-right"></i> Basic Icons</a>
                                    </li>
                                    <li>
                                        <a className="withripple" href="component-icons-fontawesome.html">
                                            <i className="fa fa-arrow-circle-right"></i> Font Awesome</a>
                                    </li>
                                    <li>
                                        <a className="withripple" href="component-icons-iconic.html">
                                            <i className="fa fa-arrow-circle-right"></i> Material Design Iconic</a>
                                    </li>
                                    <li>
                                        <a className="withripple" href="component-icons-glyphicons.html">
                                            <i className="fa fa-arrow-circle-right"></i> Glyphicons</a>
                                    </li>
                                    <li>
                                        <a className="withripple" href="component-icons-ionicons.html">
                                            <i className="fa fa-arrow-circle-right"></i> Ionicons <span className="badge badge-success pull-right">2.0</span></a>
                                    </li>
                                </ul>
                            </div>

                            <div className="megamenu-block animated fadeInRight animated-2x">
                                <h3 className="megamenu-block-title"><i className="fa fa-area-chart"></i> Charts</h3>
                                <ul className="megamenu-block-list">
                                    <li>
                                        <a className="withripple" href="component-charts-circle.html">
                                            <i className="zmdi zmdi-chart-donut"></i> Circle Charts</a>
                                    </li>
                                    <li>
                                        <a className="withripple" href="component-charts-bar.html">
                                            <i className="fa fa-bar-chart"></i> Bars Charts</a>
                                    </li>
                                    <li>
                                        <a className="withripple" href="component-charts-line.html">
                                            <i className="fa fa-line-chart"></i> Line Charts</a>
                                    </li>
                                    <li>
                                        <a className="withripple" href="component-charts-more.html">
                                            <i className="fa fa-pie-chart"></i> More Charts</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </li>
        <li className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle animated fadeIn animation-delay-7" data-toggle="dropdown" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false" data-name="blog">Blog <i className="zmdi zmdi-chevron-down"></i></a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="blog-sidebar.html"><i className="zmdi zmdi-view-compact"></i> Blog Sidebar 1</a></li>
                <li><a className="dropdown-item" href="blog-sidebar2.html"><i className="zmdi zmdi-view-compact"></i> Blog Sidebar 2</a></li>
                <li><a className="dropdown-item" href="blog-masonry.html"><i className="zmdi zmdi-view-dashboard"></i> Blog Masonry 1</a></li>
                <li><a className="dropdown-item" href="blog-masonry2.html"><i className="zmdi zmdi-view-dashboard"></i> Blog Masonry 2</a></li>
                <li><a className="dropdown-item" href="blog-full.html"><i className="zmdi zmdi zmdi-view-stream"></i> Blog Full Page 1</a></li>
                <li><a className="dropdown-item" href="blog-full2.html"><i className="zmdi zmdi zmdi-view-stream"></i> Blog Full Page 2</a></li>
                <li className="dropdown-divider"></li>
                <li><a className="dropdown-item" href="blog-post.html"><i className="zmdi zmdi-file-text"></i> Blog Post 1</a></li>
                <li><a className="dropdown-item" href="blog-post2.html"><i className="zmdi zmdi-file-text"></i> Blog Post 2</a></li>
            </ul>
        </li>
        <li className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle animated fadeIn animation-delay-8" data-toggle="dropdown" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false" data-name="portfolio">Portfolio <i className="zmdi zmdi-chevron-down"></i></a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="portfolio-filters_sidebar.html"><i className="zmdi zmdi-view-compact"></i> Portfolio Sidebar Filters</a></li>
                <li><a className="dropdown-item" href="portfolio-filters_topbar.html"><i className="zmdi zmdi-view-agenda"></i> Portfolio Topbar Filters</a></li>
                <li><a className="dropdown-item" href="portfolio-filters_sidebar_fluid.html"><i className="zmdi zmdi-view-compact"></i> Portfolio Sidebar Fluid</a></li>
                <li><a className="dropdown-item" href="portfolio-filters_topbar_fluid.html"><i className="zmdi zmdi-view-agenda"></i> Portfolio Topbar Fluid</a></li>
                <li><a className="dropdown-item" href="portfolio-cards.html"><i className="zmdi zmdi-card-membership"></i> Porfolio Cards</a></li>
                <li><a className="dropdown-item" href="portfolio-masonry.html"><i className="zmdi zmdi-view-dashboard"></i> Porfolio Masonry</a></li>
                <li><a className="dropdown-item with-badge" href="portfolio-gallery.html"><i className="zmdi zmdi-apps"></i> Picture Gallery <span className="badge badge-success text-right">1.5</span></a></li>
                <li className="dropdown-divider"></li>
                <li><a className="dropdown-item" href="portfolio-item.html"><i className="zmdi zmdi-collection-item-1"></i> Portfolio Item 1</a></li>
                <li><a className="dropdown-item" href="portfolio-item2.html"><i className="zmdi zmdi-collection-item-2"></i> Portfolio Item 2</a></li>
            </ul>
        </li>
        <li className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle animated fadeIn animation-delay-9" data-toggle="dropdown" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false" data-name="ecommerce">E-Commerce <i className="zmdi zmdi-chevron-down"></i></a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="ecommerce-filters.html">E-Commerce Sidebar</a></li>
                <li><a className="dropdown-item" href="ecommerce-filters-full.html">E-Commerce Sidebar Full</a></li>
                <li><a className="dropdown-item" href="ecommerce-filters-full2.html">E-Commerce Topbar Full</a></li>
                <li className="dropdown-divider"></li>
                <li><a className="dropdown-item" href="ecommerce-item.html">E-Commerce Item</a></li>
                <li><a className="dropdown-item" href="ecommerce-cart.html">E-Commerce Cart</a></li>
            </ul>
        </li>
    </ul>
    </div>
    <a href="javascript:void(0)" className="ms-toggle-left btn-navbar-menu"><i className="zmdi zmdi-menu"></i></a>
        </div>
    </nav>

      )
    }
}

export default Nav;