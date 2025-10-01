import React, {createContext,useState,} from "react";

const FilterContext = createContext();

export const FilterProvider = ({chidren}) => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleCategory = (cat) => {
        setSelectedCategories(prev => 
            prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
        );  
    }
    return (
        <FilterContext.Provider value={{selectedCategories, toggleCategory, searchTerm, setSearchTerm}}>
            {chidren}
        </FilterContext.Provider>
    );
};