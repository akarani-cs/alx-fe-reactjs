import React from 'react';
import { Clock, Users, Heart, Edit, Trash2 } from 'lucide-react';
import { Recipe } from '../store/RecipeStore';
import { useRecipeStore } from '../store/RecipeStore';
import { Link } from 'react-router-dom';

interface RecipeCardProps {
  recipe: Recipe;
  showActions?: boolean;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, showActions = true }) => {
  const { favorites, addFavorite, removeFavorite, deleteRecipe } = useRecipeStore();
  const isFavorite = favorites.includes(recipe.id);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipe.id);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      {recipe.image && (
        <div className="h-48 bg-gray-200 overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <Link to={`/recipe/${recipe.id}`} className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 hover:text-orange-600 transition-colors cursor-pointer">
              {recipe.title}
            </h3>
          </Link>
          {showActions && (
            <button
              onClick={handleFavoriteToggle}
              className={`ml-2 p-2 rounded-full transition-colors ${
                isFavorite 
                  ? 'text-red-500 hover:bg-red-50' 
                  : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
              }`}
            >
              <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
          )}
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {recipe.description}
        </p>

        <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{recipe.prepTime} min</span>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(recipe.difficulty)}`}>
            {recipe.difficulty}
          </span>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-2">Ingredients:</p>
          <div className="flex flex-wrap gap-1">
            {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
              >
                {ingredient}
              </span>
            ))}
            {recipe.ingredients.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                +{recipe.ingredients.length - 3} more
              </span>
            )}
          </div>
        </div>

        {showActions && (
          <div className="flex gap-2 pt-4 border-t border-gray-100">
            <Link
              to={`/recipe/${recipe.id}/edit`}
              className="flex-1 bg-orange-50 text-orange-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-100 transition-colors flex items-center justify-center gap-2"
            >
              <Edit className="h-4 w-4" />
              Edit
            </Link>
            <button
              onClick={handleDelete}
              className="flex-1 bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors flex items-center justify-center gap-2"
            >
              <Trash2 className="h-4 w-4" />
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeCard;