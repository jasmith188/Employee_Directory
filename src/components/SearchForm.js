import React from "react";

function SearchForm(props) {
  return (
    <form className="text-center">
      <div className="form-group">
        <label htmlFor="search">Search: {props.name}</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          type="search"
          className="form-control"
          placeholder={"Search By" + props.name}
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
