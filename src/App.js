import React, { Component } from 'react'
import MoviesList from './components/MoviesList.js'
import './App.css';


class App extends Component {
  render() {

    const movies = [
      { title: 'A Movie', rating: 'PG-13', description: 'this is a movie' },
      { title: 'Another Movie', rating: 'R', description: 'this is another movie' },
      { title: 'A Third Movie', rating: 'PG', description: 'this is yet another movie' },
    ]

    const isLoggedIn = true

    return (
      <div>
        <div>
          The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
        </div>
        <MoviesList movies={movies} />
      </div>
    );
  }
}

export default App