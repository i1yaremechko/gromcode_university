import React from "react";

const Search = (props) => {
  return (
    <React.Fragment>
      <div className="search">
        <h1 className="search__title">Hello, {props.name}. What to search for you?</h1>
        <div className="search__field">
          <input className="search__input" type="text" />
          <button className="search__button">Search</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Search;