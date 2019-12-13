import React from "react";
import { Link } from "react-router-dom";

export default class VacantBoardMember extends React.Component {
  render(props) {
    return (
      <div className="col-md-6 vacancy">
        <div className="card">
          <div className="card-body">
            <div className="tab-content">
              <div
                role="tabpanel"
                className="tab-pane fade active show"
                id={this.props.id}
              >
                <h3 className="color-success animated fadeInUp animation-delay-2">
                  {this.props.title}
                </h3>
                <p className="description">{this.props.description}</p>
                {this.props.showApply && (
                  <div className="text-center">
                    <Link
                      to="/serve-on-the-board"
                      className="btn btn-raised btn-primary"
                    >
                      Apply
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
