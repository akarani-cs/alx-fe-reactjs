import { useState, useEffect } from "react";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // ✅ If using public/data.json
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error loading recipes:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-white mb-10">
        🍴 Recipe Collection
      </h1>

      {/* Responsive Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Recipe Image */}
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />

            {/* Card Content */}
            <div className="p-5">
              <h2 className="text-2xl font-semibold text-gray-800">
                {recipe.title}
              </h2>
              <p className="text-gray-600 mt-3">{recipe.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
