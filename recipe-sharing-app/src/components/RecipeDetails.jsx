
import { useParams } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = useRecipeStore(state => state.recipes.find(r => r.id === recipeId));

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      {/* Add more details here if needed */}
    </div>
  );
};

export default RecipeDetails;
