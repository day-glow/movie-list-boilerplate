import React from 'react';
import App from './App.jsx';
import movies from './movies.jsx';

class AddMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
    console.log('movie props List: ', this.props.movies)
  }

  handleMovieToAdd(movie) {
    this.props.addMoviesToList({'title': movie.target.value});

    //this.props.addMovieToList(newMovie);
  }

  handleButtonToAdd(movie) {
    movie.preventDefault();


    //this.props.addMoviesToList(this.state);

  }

  render() {
    return (
      <form id='addMovie-form' onSubmit={this.handleButtonToAdd.bind(this)}>
        <input
          type="text"
          placeholder="Add Movie Title To List"
          value={this.state.movie}
          onChange={this.handleMovieToAdd.bind(this)}
          >
        </input>
        <input type="submit" value="Add"/>
      </form>
    )

  }
}

export default AddMovies;