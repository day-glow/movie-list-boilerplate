import React from 'react';
import movies from './movies.jsx';
import MoviesList from './MoviesList.jsx';
import Search from './Search.jsx';
import AddMovies from './AddMovies.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      filterText: '',
      addMovie: ''
    }
  }

  addMoviesToList(movie) {
    this.setState({
      movies: movie
    });
    console.log('state has been changed: ', this.state)
  }

  handleSearchSubmit(query) {
    console.log('great, now what', query)
    //event.target.value -> search query
    //search movie list array
  }

  handleFilterTextChange(filterMovies) {
    this.setState({
      filterText: filterMovies
    });
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <div className='list-title'>
          <h2>My Saturday Night Movie List:</h2>
        </div>
        <div className='container'>
          <div className='Add'>
            <AddMovies movies={movies}
             value={this.state.movie}
             addMoviesToList={this.addMoviesToList.bind(this)}

            />
          </div>
          <div className='Search'>
            <Search onChange={this.handleSearchSubmit.bind(this)}
            filterText={this.state.filterText}
            onFilterTextChange={this.handleFilterTextChange.bind(this)}/>
          </div>
          <div className='list'>
            <MoviesList movies={movies}
            filterText={this.state.filterText}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;