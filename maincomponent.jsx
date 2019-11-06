import React, { Component } from "react";
import Favouriate from "./favorites";
import PCviewer from "./pcviewer";

class Picdisplay extends Component {
  state = {
    pics: [
      "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/374898/pexels-photo-374898.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/545063/pexels-photo-545063.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/257540/pexels-photo-257540.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ],
    favorites: [],
    currentIndex: 0
  };
  previous = () => {
    if (this.state.currentIndex > 0)
      this.setState({ currentIndex: this.state.currentIndex - 1 });
  };
  next = () => {
    if (this.state.currentIndex < this.state.pics.length - 1)
      this.setState({ currentIndex: this.state.currentIndex + 1 });
  };
  addfav = val => {
    let fav = [...this.state.favorites];
    let present = fav.indexOf(val);
    if (present === -1) {
      fav.push(val);
      this.setState({ favorites: fav });
    }
  };
  delfav = val => {
    let fav = [...this.state.favorites];
    let present = fav.indexOf(val);
    if (present >= 0) {
      fav.splice(present, 1);
      this.setState({ favorites: fav });
    }
  };
  render() {
    return (
      <div className="container m-2">
        <PCviewer
          pics={this.state.pics}
          index={this.state.currentIndex}
          Add={this.addfav}
        />
        <div className="row text-center">
          <div className="col-6">
            <button className="btn btn-primary" onClick={() => this.previous()}>
              Previous
            </button>
          </div>
          <div className="col-6">
            <button className="btn btn-primary" onClick={() => this.next()}>
              Next
            </button>
          </div>
        </div>

        {this.state.favorites.length <= 0 ? (
          ""
        ) : (
          <div>
            <h3>My Favourites</h3>
            <Favouriate favourites={this.state.favorites} del={this.delfav} />
          </div>
        )}
      </div>
    );
  }
}

export default Picdisplay;
