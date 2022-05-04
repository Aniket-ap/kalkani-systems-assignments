import React from "react";
import "./searchBar.css"


const SearchBar = ({value, setValue, onSearch}) => {
  return (
    <>
      <div className="search">
        <form className="search-form">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        <button type="submit" onClick={onSearch}>Search</button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
