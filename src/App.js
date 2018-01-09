import React, { Component } from 'react'
import Movie from './components/Movie.js'
import MoviesList from './components/MoviesList.js'
import './App.css';


class App extends Component {
  render() {

    const movies = [
      { title: 'A Movie', rating: 'PG-13', description: 'this is a movie' },
      { title: 'Another Movie', rating: 'R', description: 'this is another movie' },
      { title: 'A Third Movie', rating: 'PG', description: 'this is yet another movie' },
    ]

    return (
      <MoviesList movies={movies} />
    );
  }
}

export default App