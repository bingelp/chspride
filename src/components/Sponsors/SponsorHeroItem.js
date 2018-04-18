import React from "react";
import helper from "../Helper";
import './Sponsors.css';

export default class SponsorHeroItem extends React.Component {

    static openInNewTab(url) {
        let win = window.open(url, '_blank');
        win.focus();
    }
    handleClick() {
        const campaign = "?utm_source=charleston_pride&utm_medium=website&utm_campaign=sponsors";
        SponsorHeroItem.openInNewTab(this.props.meta.url+campaign);
    }
    render(props) {
        return <div className={"card col-sm-4 col-md-2 card-" + helper(this.props.meta.level)}>
            <div className="ms-thumbnail-container">
                <figure className={"ms-thumbnail ms-thumbnail-bottom ms-thumbnail-" + helper(this.props.meta.level)}>
                    <img src={this.props.meta.logoPath} alt={this.props.meta.logo} className="img-fluid"/>
                    <figcaption className="ms-thumbnail-caption text-center">
                        <div className="ms-thumbnail-caption-content">
                            <h4 className="ms-thumbnail-caption-title">{this.props.meta.name}</h4>
                            <p>{this.props.description}</p>
                            <button onClick={(e) => this.handleClick(e)}
                                    className={"btn-circle btn-circle-raised btn-circle-" + helper(this.props.meta.level)}>
                                <i className="zmdi zmdi-globe"></i>
                                <div className="ripple-container"></div>
                            </button>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </div>
    }
}