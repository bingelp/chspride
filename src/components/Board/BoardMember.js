import React from 'react';

export default class BoardMember extends React.Component {

    render(props) {
    return (
     <div className="col-md-6 col-lg-4">
       <div className="card">
         <div className="withripple zoom-img">
             <img src={this.props.photoSrc} alt={this.props.firstName + " " + this.props.lastName} className="img-fluid"></img>
         </div>


        <ul className="nav nav-tabs nav-tabs-transparent indicator-primary nav-tabs-full nav-tabs-12" role="tablist">
            <li className="nav-item"><a className="nav-link withoutripple active" href={"#profile-" + this.props.id} aria-controls="profile" role="tab" data-toggle="tab"><i className="zmdi zmdi-home"></i> <span className="d-none d-sm-inline">Profile</span></a></li>
            <li className="nav-item"><a className="nav-link withoutripple" href={"#bio-" + this.props.id} aria-controls="bio" role="tab" data-toggle="tab"><i className="zmdi zmdi-account"></i> <span className="d-none d-sm-inline">Bio</span></a></li>
        </ul>

        <div className="card-body">
            <div className="tab-content">
                <div role="tabpanel" className="tab-pane fade active show" id={"profile-" + this.props.id}>
                    <h3 className="color-success animated fadeInUp animation-delay-2">{this.props.firstName} {this.props.lastName}</h3>
                    <h4 className="animated zoomInDown fadeInUp-delay-3">{this.props.title}</h4>
                    <p><i class="zmdi zmdi-email mr-1 color-primary"></i> <a href={'mailto:' +this.props.email + "@charlestonpride.org"}>{this.props.email}@charlestonpride.com</a></p>
                    <p><i class="zmdi zmdi-calendar mr-1 color-info"></i> Elected {this.props.elected} </p>
                    <em><i class="zmdi zmdi-account mr-1 color-royal"></i> {this.props.pronouns}</em>
                </div>
                <div role="tabpanel" className="tab-pane fade" id={"bio-" + this.props.id}>
                    <p>{this.props.bio}</p>
                </div>
            </div>
        </div>
       </div>
     </div>
     )
    }
}