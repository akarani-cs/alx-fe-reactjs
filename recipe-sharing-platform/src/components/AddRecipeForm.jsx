import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !ingredients || !instructions) {
      setErrors("⚠ Please fill out all fields.");
      return;
    }

    const ingredientsList = ingredients.split(",").map((i) => i.trim());
    if (ingredientsList.length < 2) {
      setErrors("⚠ Please add at least two ingredients.");
      return;
    }

    setErrors("");
    const newRecipe = { title, ingredients: ingredientsList, instructions };

    console.log("Recipe submitted:", newRecipe);
    alert("Recipe submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Add a New Recipe
        </h1>

        {errors && <p className="text-red-600 mb-4">{errors}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Recipe Title
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Ingredients (separate with commas)
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              rows="4"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            ></textarea>
          </div>

          {/* Instructions */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Preparation Steps
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              rows="6"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-500 transition"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRecipeForm;


steps
validate
md