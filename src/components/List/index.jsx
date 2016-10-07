import React, { Component } from 'react';

import './style/index.css';

const Movie = ({ imdbId, title, releaseYear }) => (
  <tr>
    <td>{imdbId}</td>
    <td>{title}</td>
    <td>{releaseYear}</td>
  </tr>
);

class List extends Component {

  render() {
    const { movies } = this.props;

    return (
      <table className="movies">
        <thead>
          <tr>
            <th>ID</th>
            <th>title</th>
            <th>year</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => <Movie key={movie.imdbId} {...movie} />)}
        </tbody>
      </table>
    );
  }
}

export default List;
