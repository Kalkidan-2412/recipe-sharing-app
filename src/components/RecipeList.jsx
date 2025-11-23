import { useRecipeStore } from '../recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length === 0 && <p>No recipes yet.</p>}

      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            marginBottom: "10px",
            borderRadius: "5px"
          }}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
