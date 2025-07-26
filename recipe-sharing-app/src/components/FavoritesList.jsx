import { Link } from 'react-router-dom';
import useRecipeStore from '../store/RecipeStore';

const FavoritesList = () => {
  const { recipes, favorites, removeFavorite } = useRecipeStore();

  const favoriteRecipes = recipes.filter((recipe) =>
    favorites.includes(recipe.id)
  );

  return (
    <div className="p-6 bg-gray-950 text-white min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">❤️ Your Favorite Recipes</h2>

      {favoriteRecipes.length === 0 ? (
        <p className="text-center text-gray-400">No favorites yet. Start adding some!</p>
      ) : (
        <ul className="space-y-4 max-w-4xl mx-auto">
          {favoriteRecipes.map((recipe) => (
            <li key={recipe.id} className="bg-gray-800 p-4 rounded shadow">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-semibold">{recipe.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{recipe.description}</p>
                  <Link
                    to={`/recipes/${recipe.id}`}
                    className="text-blue-400 hover:underline text-sm"
                  >
                    View Details →
                  </Link>
                </div>
                <button
                  onClick={() => removeFavorite(recipe.id)}
                  className="ml-4 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Remove ❤️
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesList;
