import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import recipesData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find(
      (item) => item.id === parseInt(id)
    );
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold">Recipe not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">

        {/* Image */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 md:h-96 object-cover"
        />

        <div className="p-8">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            {recipe.title}
          </h1>

          {/* Ingredients Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Ingredients
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          {/* Instructions Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Cooking Instructions
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
