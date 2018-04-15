import React from "react";
import Sponsor from "./Sponsor";
import SponsorsList from "./SponsorsList";
import "./Sponsors.css";

export default class Sponsors extends React.Component {

    render(props) { return (
    <div>
          <div className="ms-hero-sponsors ms-hero-bg-royal">
            <div className="container">
              <div className="text-center">
                <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">Our Sponsors Make It Possible</h1>
              </div>
            </div>
          </div>
    <div id="sponsors" className="container">
        <SponsorsList level="Red">
            <Sponsor name="Joseph Kaiser" description="Attorney at Law" level="warning" url="https://www.cnn.com" size="200x200" />
            <Sponsor name="Jack Daniels" description="Tennessee Whiskey" level="success" url="https://www.cnn.com" size="200x200" />
        </SponsorsList>
        <SponsorsList level="Orange">
            <Sponsor name="Joseph Kaiser" description="Attorney at Law" level="warning" url="https://www.cnn.com" size="200x200" />
            <Sponsor name="Jack Daniels" description="Tennessee Whiskey" level="success" url="https://www.cnn.com" size="200x200" />
        </SponsorsList>
        <SponsorsList level="Yellow">
        </SponsorsList>
        <SponsorsList level="Green">
        </SponsorsList>
        <SponsorsList level="Blue">
        </SponsorsList>
        <SponsorsList level="Purple">
            <Sponsor name="Joseph Kaiser" description="Attorney at Law" level="warning" url="https://www.cnn.com" size="200x200" />
            <Sponsor name="Jack Daniels" description="Tennessee Whiskey" level="success" url="https://www.cnn.com" size="200x200" />
            <Sponsor name="Joseph Kaiser" description="Attorney at Law" level="warning" url="https://www.cnn.com" size="200x200" />
            <Sponsor name="Jack Daniels" description="Tennessee Whiskey" level="success" url="https://www.cnn.com" size="200x200" />
            <Sponsor name="Joseph Kaiser" description="Attorney at Law" level="warning" url="https://www.cnn.com" size="200x200" />
            <Sponsor name="Jack Daniels" description="Tennessee Whiskey" level="success" url="https://www.cnn.com" size="200x200" />
            <Sponsor name="Joseph Kaiser" description="Attorney at Law" level="warning" url="https://www.cnn.com" size="200x200" />
            <Sponsor name="Jack Daniels" description="Tennessee Whiskey" level="success" url="https://www.cnn.com" size="200x200" />
        </SponsorsList>

    </div></div>)
    }

    }