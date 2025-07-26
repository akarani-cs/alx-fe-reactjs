import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const searchTerm = useRecipeStore(state => state.searchTerm);
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    filterRecipes();
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search recipes..."
        style={{ padding: '0.5rem', width: '100%', maxWidth: 400 }}
      />
    </div>
  );
};

export default SearchBar;
