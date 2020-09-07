import React from 'react';
import App from './App.jsx';
import MovieItem from './MovieItem.jsx';

class MoviesList extends React.Component {
  render() {

    const filterText = this.props.filterText.toUpperCase();
    console.log('movieList filter text: ', filterText)
    const rows = [];
      {this.props.movies.map((movie) => {
        if (movie.title.toUpperCase().indexOf(filterText) === -1) {
          console.log('No Match!');
          return;
        }
        rows.push(
          <MovieItem movie={movie} key={movie.title}/>
        )
      })}
    if (rows.length === 0) {
      return (
        <table>
          <tbody id='sorry'>{'Sorry, no movies match your search.  Please try another movie title.'}</tbody>
        </table>
      )
    }
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