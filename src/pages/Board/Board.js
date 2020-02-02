import React from "react";
import BoardMember from "./BoardMember";
import "./Board.css";
import board from "./Board-3.jpg";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      executives: [],
      members: []
    };
  }

  componentDidMount() {
    fetch("https://chspride.azurewebsites.net/api/directors")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({
          executives: data.executives,
          members: data.members
        });
      });
  }

  render() {
    return (
      <div>
        <div className="ms-hero-page-override ms-hero-img-board ms-hero-bg-primary">
          <div className="container">
            <div className="text-center">
              <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-4 animated zoomInDown animation-delay-5">
                2020 Board of Directors
              </h1>
            </div>
          </div>
        </div>
        <div className="container">
          <p className="lead text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">
            The Board of Directors is formed from four permanent positions,
            including Chief Executive, Chief Operating Officer, Secretary of the
            Board, and Chief Financial Officer, which form the Executive
            Committee, and up to nine additional directorship positions which
            are created and removed at the discretion of the Executive
            Committee. Elections are held at the beginning of every fiscal year
            to fill the Executive Committee. The newly elected Executive
            Committee is then responsible for creating the additional
            director-level positions to assist in the management and
            administration of the <strong>Charleston Pride Festival</strong>.
          </p>
          <h2 className="text-center">2020 Board of Directors</h2>
          <div className="row">
            {this.state.executives &&
              this.state.executives.map(b => (
                <BoardMember key={b.id} meta={b} />
              ))}
            {this.state.members &&
              this.state.members.map(b => <BoardMember key={b.id} meta={b} />)}
          </div>
          <div className="row">
            <div className="col">
              <a className="img-thumbnail withripple color-warning">
                <div className="thumbnail-container">
                  <img
                    src={board}
                    alt="Board of Directors"
                    className="img-fluid"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
