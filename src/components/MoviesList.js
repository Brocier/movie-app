import React, { Component } from 'react'
import Movie from './Movie'

class MoviesList extends Component {


  render() {

    const moviesList = this.props.movies.map((movie, i) => {
      return (
        <Movie
          key={i}
          title={movie.title}
          rating={movie.rating}
          description={movie.description}
        />
      )
    })

    return (
      <div>
        {moviesList}
      </div>
    )
  }
}

export default MoviesList