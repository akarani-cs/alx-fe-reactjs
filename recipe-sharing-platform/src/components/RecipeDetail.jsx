import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setRecipe(found);
      });
  }, [id]);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-gray-900">
        <p className="text-lg">Loading recipe...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Recipe Image */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-72 object-cover"
        />

        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800">{recipe.title}</h1>
          <p className="text-gray-600 mt-2">{recipe.summary}</p>

          {/* Ingredients Section */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Ingredients</h2>
            <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
              {recipe.ingredients?.map((ingredient, idx) => (
                <li key={idx}>{ingredient}</li>
              ))}
            </ul>
          </div>

          {/* Instructions Section */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Cooking Instructions
            </h2>
            <ol className="list-decimal list-inside mt-3 text-gray-700 space-y-2">
              {recipe.instructions?.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>

          {/* Back Button */}
          <div className="mt-6">
            <Link
              to="/"
              className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              ⬅ Back to Recipes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
