import React from 'react';
import { Link } from 'react-router-dom';
import vacant from './vacant.jpg'

export default class VacantBoardMember extends React.Component {

    render(props) {
        return (
            <div className="col-md-6 col-lg-4">
                <div className="card">
                    <div className="withripple zoom-img">
                        <img src={vacant} alt="vacant" className="img-fluid"></img>
                    </div>

                    <div className="card-body">
                        <div className="tab-content">
                            <div role="tabpanel" className="tab-pane fade active show" id={"profile-" + this.props.id}>
                                <h3 className="color-success animated fadeInUp animation-delay-2">Vacant</h3>
                                <h4 className="animated fadeInUp animation-delay-3">{this.props.title}</h4>
                                <div className="text-center">
                                    <Link to="/serve-on-the-board" className="btn btn-raised btn-primary">Apply</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}