import { useRecipeStore } from '../recipeStore';
import { useNavigate } from 'react-router-dom';

function DeleteRecipeButton({ id }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return (
    <button onClick={() => deleteRecipe(id)} style={{ marginTop: '10px', color: 'red' }}>
      Delete Recipe
    </button>
  );
}

export default DeleteRecipeButton;