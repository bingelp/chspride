import React from "react";
import BoardMember from "./BoardMember";
import "./Board.css";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      executives: [],
      directors: []
    };
  }

  componentDidMount() {
    fetch(
      "https://gaq5vhskv6.execute-api.us-east-1.amazonaws.com/prod/directors"
    )
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({
          directors: data.filter(d => !d.executive).sort(this.compare),
          executives: data.filter(d => d.executive).sort(this.compare)
        });
      });
  }

  compare(a, b) {
    if (a.executive) {
      if (a.order !== b.order) {
        return a.order - b.order;
      }
    }

    if (a.yearElected !== b.yearElected) {
      return a.yearElected - b.yearElected;
    }
    return a.monthElected - b.monthElected;
  }

  render() {
    return (
      <div>
        <div className="ms-hero-page-override ms-hero-img-board ms-hero-bg-primary">
          <div className="container">
            <div className="text-center">
              <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">
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
            {this.state.directors &&
              this.state.directors.map(b => (
                <BoardMember key={b.id} meta={b} />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
