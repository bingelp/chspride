import React from 'react';
import {Link} from 'react-router-dom';
import vacant from './vacant.jpg'

export default class VacantBoardMember extends React.Component {

    render(props) {
    return (
     <div className="col-md-6 col-lg-4">
       <div className="card">
         <div className="withripple zoom-img">
             <img src={vacant} alt="vacant" className="img-fluid"></img>
         </div>

        <ul className="nav nav-tabs nav-tabs-transparent indicator-primary nav-tabs-full nav-tabs-12" role="tablist">
            <li className="nav-item"><a className="nav-link withoutripple active" href={"#profile-" + this.props.id} aria-controls="profile" role="tab" data-toggle="tab"><i className="zmdi zmdi-home"></i> <span className="d-none d-sm-inline">Profile</span></a></li>
            <li className="nav-item"><a className="nav-link withoutripple" href={"#bio-" + this.props.id} aria-controls="bio" role="tab" data-toggle="tab"><i className="zmdi zmdi-account"></i> <span className="d-none d-sm-inline">Bio</span></a></li>
        </ul>
        <div className="card-body">
            <div className="tab-content">
                <div role="tabpanel" className="tab-pane fade active show" id={"profile-" + this.props.id}>
                    <h3 className="color-success animated fadeInUp animation-delay-2">Vacant</h3>
                    <h4 className="animated fadeInUp animation-delay-3">{this.props.title}</h4>
                    <div className="text-center">
                        <Link to="/nonexist" className="btn btn-raised btn-primary">Apply</Link>
                    </div>
                </div>
                <div role="tabpanel" className="tab-pane fade" id={"bio-" + this.props.id}>
                    <p>Position is currently vacant.</p>
                </div>
            </div>
        </div>
       </div>
     </div>
     )
    }
}