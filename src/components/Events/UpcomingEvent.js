import React from 'react';

class UpcomingEvent extends React.Component {
    render() {
    return (
    <div className="col-lg-3">
       <div className="ms-thumbnail-container">
        <figure className="ms-thumbnail ms-thumbnail-light">
          <img src="http://via.placeholder.com/300x400" alt="" className="img-fluid"></img>
          <figcaption className="ms-thumbnail-caption text-center">
            <div className="ms-thumbnail-caption-content">
              <h3 className="ms-thumbnail-caption-title color-royal">Caption Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a href="javascript:void(0)" className="btn-circle btn-circle-raised btn-circle-sm ml-1 mr-1 btn-facebook">
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