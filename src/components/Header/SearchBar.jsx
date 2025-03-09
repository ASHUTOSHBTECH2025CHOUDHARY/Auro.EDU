import React, { useState } from "react";
import debounce from "lodash.debounce";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearch = debounce((term) => {
    onSearch(term);
  }, 500);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search posts..."
        aria-label="Search posts"
      />
    </div>
  );
}

export default SearchBar;