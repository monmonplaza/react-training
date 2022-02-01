import React from "react";
import { ImSearch } from "react-icons/im";

const Search = () => {
  return (
    <>
      <div className="search">
        <div className="search__wrapper">
          <form action="">
            <div className="form__group search--form">
              <input
                type="text"
                name="search_input"
                placeholder="Type in you search string..."
              />
              <button>
                <ImSearch />
              </button>
            </div>
          </form>
          <p>
            Search Result: <span>34</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Search;
