import { useState, useEffect } from 'react';
import useRecipeStore from './recipeStore'; // Adjust the path to your store

const EditRecipeForm = ({ recipeId, onClose }) => {
  const { recipes, updateRecipe } = useRecipeStore();
  const recipeToEdit = recipes.find((r) => r.id === recipeId);

  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  useEffect(() => {
    if (recipeToEdit) {
      setTitle(recipeToEdit.title);
      setIngredients(recipeToEdit.ingredients);
      setInstructions(recipeToEdit.instructions);
    }
  }, [recipeToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(recipeId, {
      title,
      ingredients,
      instructions,
    });
    onClose(); // optionally close the form/modal
  };

  if (!recipeToEdit) return <p className="text-red-500">Recipe not found.</p>;

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-900 text-white p-6 rounded-2xl shadow-xl space-y-4 w-full max-w-md"
    >
      <h2 className="text-2xl font-bold mb-2">Edit Recipe</h2>

      <div>
        <label className="block text-sm">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          required
        />
      </div>

      <div>
        <label className="block text-sm">Ingredients</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          rows="3"
          required
        />
      </div>

      <div>
        <label className="block text-sm">Instructions</label>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          rows="4"
          required
        />
      </div>

      <div className="flex justify-between mt-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save Changes
        </button>
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditRecipeForm;
