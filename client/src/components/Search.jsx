import React from 'react';
import App from './App.jsx';
import movies from './movies.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    console.log('e: ', e)
    alert('you are searching for: ' + this.props.filterText);
    e.preventDefault();
  }

  handleSearch({target}) {
    console.log('query handler: ', target.value);
    this.props.onFilterTextChange(target.value);
  }


  render() {
    const filterText = this.props.filterText;
    return (
      <form id='search' onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          placeholder="Search Movie List..."
          value={this.props.filterText}
          onChange={this.handleSearch.bind(this)}>
        </input>
        <input type="submit" value="Go!" />

      </form>
    )
  }
}

export default Search;


// class Search extends React.Component {
//   render() {

//     return (
//       <form id='search'>
//         <input
//           type="text"
//           placeholder="Search Movie List...">
//         </input>

//       <button type="submit" value="Submit"
//       onClick={(e) => this.handleSearchClick(e.target.value)}>Go!</button>
//       </form>
//     )
//   }
// }
