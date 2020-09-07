import React from 'react';
import App from './App.jsx';
//import MovieItem from './MovieItem.jsx';

const MoviesList = (props) => (
  <div>
    <ul className='container'>
      {props.movies.map((movie) => {
        return (
          <li className='movie-title' key={movie.title}>{movie.title}</li>
        )
      })}
    </ul>
  </div>
);

export default MoviesList;