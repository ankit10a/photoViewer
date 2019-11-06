import React, { Component } from "react";
class Favouriate extends Component {
  render() {
    return (
      <div>
        {this.props.favourites.map(n => (
          <img
            src={n}
            style={{ width: "40px", margin: "4px" }}
            onClick={() => this.props.del(n)}
            key={n}
          />
        ))}
      </div>
    );
  }
}

export default Favouriate;
