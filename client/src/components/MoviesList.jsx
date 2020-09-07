import React from 'react';
import App from './App.jsx';
import MovieItem from './MovieItem.jsx';

class MoviesList extends React.Component {
  render() {
    const rows = [];
      {this.props.movies.map((movie) => {
        rows.push(
          <MovieItem movie={movie} key={movie.title}/>
        )
      })}

    return (
      <table>
        <thead>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}



//functional
// const MoviesList = (props) => (
//   <div>
//     <ul className='container'>
//       {props.movies.map((movie) => {
//         return (
//           <li className='movie-title' key={movie.title}>{movie.title}</li>
//         )
//       })}
//     </ul>
//   </div>
// );

export default MoviesList;