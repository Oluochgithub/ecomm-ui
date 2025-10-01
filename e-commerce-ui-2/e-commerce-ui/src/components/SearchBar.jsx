import React from "react";

const SearchBar = ({searchTerm,onSearchChange}) => {
    <input
    className="w-full p-2 border rounded mb-6"
    type="text"
    value={searchTerm}
    onChange={(e)=>onSearchChange(e.target.value)}
    placeholder="Search products..."
    />
}
export default SearchBar;
