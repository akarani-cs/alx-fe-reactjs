import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from '../store/RecipeStore'; // adjust the import path if needed

const RecipeDetails = () => {
  const { id } = useParams(); // get recipe ID from URL
  const navigate = useNavigate();
  const { recipes } = useRecipeStore();

  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <div className="text-red-500 p-4">
        <p>Recipe not found.</p>
        <button
          onClick={() => navigate('/')}
          className="text-blue-400 underline mt-2"
        >
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white p-6 rounded-xl shadow-xl max-w-2xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <p className="bg-gray-800 p-3 rounded">{recipe.ingredients}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <p className="bg-gray-800 p-3 rounded">{recipe.instructions}</p>
      </section>

      <div className="mt-6">
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default RecipeDetails;
