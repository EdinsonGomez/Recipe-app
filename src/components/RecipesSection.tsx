import { useContext } from "react";
import { AppContext } from "../store/context";
import RecipeItem from "./RecipeItem";
import "../styles/recipesSection.scss";

const RecipesSection = () => {
  const { state } = useContext(AppContext);
  return (
    <section>
      <div className="recipes-section-container">
        <div className="recipes-section-title">Nuevas Recetas</div>
        <div className="recipes-section-content">
          <div className="recipes-section-list">
            {state.recipeList.map((recipe) => (
              <RecipeItem key={`recipe-${recipe.id}`} recipe={recipe} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecipesSection;