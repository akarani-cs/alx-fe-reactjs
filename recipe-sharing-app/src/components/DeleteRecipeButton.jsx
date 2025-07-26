import { useRecipeStore } from '../store/recipeStore';

const DeleteRecipeButton = ({ id, onDeleted }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(id);
    if (onDeleted) onDeleted();
  };

  return (
    <button onClick={handleDelete} style={{ color: 'white', background: 'red', border: 'none', padding: '0.5em 1em', borderRadius: '4px' }}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
