import React from "react";
import Sponsor from "./SponsorHeroItem"
import { Link } from 'react-router-dom';

export default class SponsorHero extends React.Component {
    render(props) {
    return (
    <div className="container text-center">
        <h2>Thank you to our sponsors</h2>
        <div className="row">
        <Sponsor name="Rum Haven" level="danger" url="https://www.cnn.com" size="200x200" />
        <Sponsor name="Joseph Kaiser" description="Attorney at Law" level="warning" url="https://www.cnn.com" size="200x200" />
        <Sponsor name="Jack Daniels" description="Tennessee Whiskey" level="success" url="https://www.cnn.com" size="200x200" />
        <Sponsor name="Mix 96" level="info" url="https://www.cnn.com" size="200x200" />
        <Sponsor name="Snagajob" level="primary" url="https://www.cnn.com" size="200x200" />
        <Sponsor name="Bud Light" level="royal" url="https://www.cnn.com" size="200x200" />
        </div>
        <Link to="/sponsorships" className="btn btn-success btn-raised" > <i class="zmdi zmdi-thumb-up"></i>Become a sponsor</Link>
        <Link to="/sponsors" className="btn btn-info btn-raised" > <i class="zmdi zmdi-eye"></i>View All Sponsors</Link>
    </div>
    )
   }
}