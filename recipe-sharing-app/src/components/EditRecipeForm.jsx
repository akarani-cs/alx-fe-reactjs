
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipeId = Number(id);
  const recipe = useRecipeStore(state => state.recipes.find(r => r.id === recipeId));
  const updateRecipe = useRecipeStore(state => state.updateRecipe);

  const [title, setTitle] = useState(recipe ? recipe.title : '');
  const [description, setDescription] = useState(recipe ? recipe.description : '');

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({ id: recipeId, title, description });
    navigate(`/recipes/${recipeId}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
