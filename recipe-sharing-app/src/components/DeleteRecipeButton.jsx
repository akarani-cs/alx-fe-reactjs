import React from "react";
import { useRecipeStore } from "../stores/recipeStore";

const DeleteRecipe = () => {
  const recipes = useRecipeStore(state =>
    state.filteredRecipes.length > 0 ? state.filteredRecipes : state.recipes
  );
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  return (
    <div className="p-6 text-white bg-gray-900 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center text-teal-400">
        🗑️ Delete a Recipe
      </h2>

      {recipes.length === 0 ? (
        <p className="text-gray-400 text-center">No recipes available.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {recipes.map(recipe => (
            <div
              key={recipe.id}
              className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-[calc(100%-10rem)]">
                <h3 className="text-lg font-semibold text-teal-300">
                  {recipe.title}
                </h3>
                <p className="text-sm text-gray-400 mt-2 line-clamp-2">
                  {recipe.description}
                </p>
                <button
                  onClick={() => deleteRecipe(recipe.id)}
                  className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-xl transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DeleteRecipe;
