 // RecipeList component
  import { useRecipeStore } from '../store/RecipeStore';
  


import React, { useEffect } from 'react';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const searchTerm = useRecipeStore(state => state.searchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  return (
    <div>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        filteredRecipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;

