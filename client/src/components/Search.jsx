import React from 'react';
import App from './App.jsx';
import movies from './movies.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   query: ''
    // }
  }

  handleSubmit(e) {
    alert('you are searching for: ' + this.state.value);
    e.preventDefault();
    //search movie list and filter
    //change state
  }

  handleSearch({target}) {
    //const {name, value} = target;
    console.log('query handler: ', target.value);
    //must search movie list/filter
    //then change state with updated list
    this.props.onFilterTextChange(target.value);
    this.setState({
      query: target.value //incorrect placeholder
    });
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
