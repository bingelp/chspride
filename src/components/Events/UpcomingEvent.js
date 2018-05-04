import React from 'react';

class UpcomingEvent extends React.Component {
    render(props) {
    return (
    <div className="col-6 col-lg-3">
       <div className="ms-thumbnail-container">
        <figure className="ms-thumbnail ms-thumbnail-light">
          <img src={this.props.meta.graphicPath} alt={this.props.meta.name} className="img-fluid"></img>
          <figcaption className="ms-thumbnail-caption text-center">
            <div className="ms-thumbnail-caption-content">
              <h3 className="ms-thumbnail-caption-title color-royal">{this.props.meta.name}</h3>
                <h4>{this.props.meta.location}</h4>
              <h4>{this.props.meta.date}</h4>
              <a href={this.props.meta.url} className="btn-circle btn-circle-raised btn-circle-sm ml-1 mr-1 btn-facebook">
                <i className="zmdi zmdi-facebook"></i>
              </a>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>)
    }
}

export default UpcomingEvent;