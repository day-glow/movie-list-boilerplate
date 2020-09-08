import React from 'react';
import App from './App.jsx';
import movies from './movies.jsx';

class AddMovies extends React.Component {
  constructor(props) {
    super(props);
    console.log('movie props List: ', this.props.movies)
  }

  newMovieToAdd(movie) {
    let newMovie = {
      'title': movie
    }

    console.log('Updated: ', newMovie)


    //this.props.addMovieToList(newMovie);
  }

  render() {
    return (
      <form id='addM' >
        <input
          type="text"
          placeholder="Add Movie Title To List"

          >
        </input>
        <input type="submit" value="Add"/>
      </form>
    )

  }
}

export default AddMovies;