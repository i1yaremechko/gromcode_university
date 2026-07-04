import React from 'react';

class Search extends React.Component {
  state = { value: ''}
  
  handleChange = e => {
    this.setState({ value: e.target.value })
  }

  search = e => {
    e.preventDefault();
    const message = `Search text: ${this.state.value}`;
    alert(message);
  }

  render() {
    return (
      <form className='search' onSubmit={this.search}>
        <input 
          type="text" 
          className="search__input"
          onChange={this.handleChange}
          value={this.state.value}
        />
        <button className="search__button" type='submit'>SEARCH</button>
      </form>
    );
  }
}

export default Search;