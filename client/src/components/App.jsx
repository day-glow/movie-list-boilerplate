import React from 'react';
import movies from './movies.jsx';
import MoviesList from './MoviesList.jsx';
import Search from './Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  handleSearchClick() {
    console.log('great, now what')
    //event.target.value -> search query
    //search movie list array
  }

  render() {
    return (
      <div>
        <div className='list-title'>
          <h2>My Saturday Night Movie List:</h2>
        </div>
        <div className='container'>
          <div className='Search'>
            <Search onClick={this.handleSearchClick.bind(this)} />
          </div>
          <div className='list'>
            <MoviesList movies={movies}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;