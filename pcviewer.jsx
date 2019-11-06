import React, { Component } from "react";

class PCviewer extends Component {
  render() {
    let index = this.props.index;
    return (
      <div className="container text-center bg-light border">
        <div className="col-12">
          <img src={this.props.pics[this.props.index]} />
          <br />
          <button
            className="btn btn-primary m-2"
            onClick={() => this.props.Add(this.props.pics[this.props.index])}
          >
            Add to favouriate
          </button>
        </div>
      </div>
    );
  }
}

export default PCviewer;
