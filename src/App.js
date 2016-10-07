import React, { Component } from 'react';
import * as jQuery from 'jquery';
const $ = jQuery.default;

import './App.css';

import Filter from './components/Filter';
import List from './components/List';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  componentWillMount() {
    $.getJSON('/movies.json').then((data) => {
      const movies = Object.keys(data).map((key) => data[key])
      this.setState({ allMovies: movies, movies })
    });
  }

  onKeyDown(value) {
    const movies = this.state.allMovies.filter((movie) => {
      return movie.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    });

    const moviesResult = movies.length ? movies : this.state.allMovies;

    this.setState({ movies: moviesResult })

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Movies table</h2>
        </div>

        <Filter onKeyDown={this.onKeyDown.bind(this)} />
        <List movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
