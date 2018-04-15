import React from "react";
import helper from "../Helper";
import './Sponsors.css';
import fireBase from "../../firebase";

export default class SponsorHeroItem extends React.Component {

    openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }
    handleClick() {
        this.openInNewTab(this.props.meta.url);
    }
    render(props) {
        return (
            <div className={"card col card-" + helper(this.props.meta.level)}>
                <div className="ms-thumbnail-container">
                    <figure className={"ms-thumbnail ms-thumbnail-bottom ms-thumbnail-" + helper(this.props.meta.level)}>
                        <img src={this.props.meta.logoPath} alt={this.props.meta.logo} className="img-fluid"></img>
                        <figcaption className="ms-thumbnail-caption text-center">
                            <div className="ms-thumbnail-caption-content">
                                <h4 className="ms-thumbnail-caption-title">{this.props.meta.name}</h4>
                                <p>{this.props.description}</p>
                                <button onClick={(e) => this.handleClick(e)} className={"btn-circle btn-circle-raised btn-circle-" + helper(this.props.meta.level)}>
                                    <i className="zmdi zmdi-globe"></i><div className="ripple-container"></div></button>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
        )
    }
}