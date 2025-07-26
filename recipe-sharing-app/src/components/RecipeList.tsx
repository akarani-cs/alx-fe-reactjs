import React from 'react';
import { useRecipeStore } from '../store/RecipeStore';
import RecipeCard from './RecipeCard';

const RecipeList: React.FC = () => {
  const { filteredRecipes, searchTerm } = useRecipeStore();

  const displayRecipes = searchTerm ? filteredRecipes : useRecipeStore(state => state.recipes);

  if (displayRecipes.length === 0 && searchTerm) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No recipes found matching "{searchTerm}"</p>
        <p className="text-gray-400 text-sm mt-2">Try searching for different ingredients or recipe names</p>
      </div>
    );
  }

  if (displayRecipes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No recipes yet</p>
        <p className="text-gray-400 text-sm mt-2">Add your first recipe to get started!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayRecipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;