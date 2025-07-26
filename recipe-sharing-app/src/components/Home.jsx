import { Link } from 'react-router-dom';
import useRecipeStore from '../store/RecipeStore'; // Adjust the path to your Zustand store

const Home = () => {
  const { recipes } = useRecipeStore();

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">🍽️ Recipe Hub</h1>

        {recipes.length === 0 ? (
          <p className="text-gray-400 text-center">No recipes added yet.</p>
        ) : (
          <ul className="space-y-4">
            {recipes.map((recipe) => (
              <li
                key={recipe.id}
                className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition"
              >
                <h2 className="text-2xl font-semibold">{recipe.title}</h2>
                <p className="text-gray-400 line-clamp-2">{recipe.ingredients}</p>
                <Link
                  to={`/recipes/${recipe.id}`}
                  className="inline-block mt-3 text-blue-400 hover:underline"
                >
                  View Details →
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
