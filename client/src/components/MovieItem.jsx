import React from 'react';
import App from './App.jsx';
import MoviesList from './MoviesList.jsx';

class MovieItem extends React.Component {
  render() {

    return (
      <tr>
        <td>{this.props.movie.title}</td>
      </tr>
    )

  }
}


export default MovieItem;