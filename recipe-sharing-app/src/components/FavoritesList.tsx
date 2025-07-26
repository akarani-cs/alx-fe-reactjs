import React from 'react';
import { useRecipeStore } from '../store/RecipeStore';
import RecipeCard from './RecipeCard';

const FavoritesList: React.FC = () => {
  const { recipes, favorites } = useRecipeStore();
  
  const favoriteRecipes = recipes.filter(recipe => favorites.includes(recipe.id));

  if (favoriteRecipes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No favorite recipes yet</p>
        <p className="text-gray-400 text-sm mt-2">Start adding recipes to your favorites by clicking the heart icon</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">My Favorite Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favoriteRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;