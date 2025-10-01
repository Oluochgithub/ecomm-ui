import React from "react";

const FilterSideBar = (categories,selectedCategories,onCategoryChange) => {
    <div className="w-64 p-4 border-r">
    <h2 className="text-xl font-bold mb-4">Filter</h2>
        <div className="mb-2">
            <h3 className="font-semibold mb-2">Categories</h3>
                {categories.map((cat) => (
                    <label key={cat} className="block">
                    <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => onCategoryChange(cat)}
                        className="mr-2"
                    />
                    {cat}
                    </label>
      ))}
        </div>
    </div>

}
export default FilterSideBar;