import React from 'react';
import App from './App.jsx';
import movies from './movies.jsx';

class Search extends React.Component {
  render() {

    return (
      <form id='search'>
        <input
          type="text"
          placeholder="Search Movie List...">
        </input>

      <button type="submit" value="Submit"
      onClick={(e) => this.handleSearchClick(e.target.value)}>Go!</button>
      </form>
    )
  }
}

export default Search;