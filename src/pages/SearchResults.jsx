import React from "react";
import { useOutletContext, useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const searchQuery = location.state || useOutletContext().searchQuery;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Search Results</h2>

      {searchQuery ? (
        <p>
          You searched for: <strong>{searchQuery}</strong>
        </p>
      ) : (
        <p className="text-gray-500">Start typing something in the search bar...</p>
      )}
    </div>
  );
};

export default SearchResults;
