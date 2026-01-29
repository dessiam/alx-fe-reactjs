import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

const RecipeItem = ({ recipe }) => {
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  const isFavorite = favorites.includes(recipe.id);

  return (
    <div>
      <h3>
        <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
      </h3>
      <p>{recipe.description}</p>

      <button
        onClick={() =>
          isFavorite
            ? removeFavorite(recipe.id)
            : addFavorite(recipe.id)
        }
      >
        {isFavorite ? "Remove Favorite ❤️" : "Add to Favorites 🤍"}
      </button>
    </div>
  );
};

export default RecipeList;