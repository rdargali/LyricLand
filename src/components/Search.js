import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../context";

class Search extends Component {
  state = {
    trackTitle: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_API_KEY}`
      )
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                <i className="fas fa-music" /> Search
              </h1>
              <p className="lead text-center">
                Get the lyrics for all your favorite songs
              </p>
              <form>
                <div className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Song title"
                    name="trackTitle"
                    value={this.state.trackTitle}
                    onChange={this.handleChange}
                  />
                </div>
              </form>
              <button
                className="btn btn-primary btn-lg btn-block mb-5"
                type="submit"
                onClick={this.handleSubmit}
              >
                Get Lyrics
              </button>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
