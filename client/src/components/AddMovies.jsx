import React from 'react';
import App from './App.jsx';
import movies from './movies.jsx';

class AddMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: ''
    }
    console.log('movie props List: ', this.props.movies)
  }

  handleMovieToAdd(movie) {
    this.setState({
      movie: movie.target.value
    })
    console.log('state: ', this.state)
    //this.props.addMovieToList(newMovie);
  }

  handleButtonToAdd(movie) {
    e.preventDefault();

    //search movie list and filter
    //change state
    this.props.addMoviesToList(this.state);
    //movies.push({'title': movie.target.value})
    //console.log(movies)
  }

  render() {
    return (
      <form id='addMovie-form' onSubmit={this.  handleButtonToAdd.bind(this)}>
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