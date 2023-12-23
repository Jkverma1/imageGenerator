import React, { useState } from "react";

const SearchComponent = ({ setQuery }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    setQuery(searchInput);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        style={{ padding: "5px" }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: "7px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderTopRightRadius: "5px",
          borderBottomRightRadius: "5px",
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
