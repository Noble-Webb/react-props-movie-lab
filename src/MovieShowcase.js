import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

{/* <MovieShowcase />
    ✓ renders at least one <MovieCard /> component
    ✓ renders 9 <MovieCard /> components
    ✓ passes all 4 props to every component
    ✓ has generated the correct prop values for the first movie
    ✓ has generated the correct prop values for the last movie */}

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map( (movie, index) => <MovieCard 
    key={index}
    title={movie.title}
    IMDBRating={movie.IMDBRating}
    genres={movie.genres}
    poster={movie.poster}
    />
    )}

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
