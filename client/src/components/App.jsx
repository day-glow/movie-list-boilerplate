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

  render() {
    return (
      <div>
        <div className='list-title'>
          <h2>My Saturday Night Movie List</h2>
        </div>
        <div className='Search'>
          <Search />
        </div>
        <div className='list'>
          <MoviesList movies={movies}/>
        </div>
      </div>
    )
  }
}

export default App;