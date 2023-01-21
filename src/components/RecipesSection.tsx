import RecipeItem from "./RecipeItem";
import { Recipe } from "../models/recipe.model";
import "../styles/recipesSection.scss";

const popularRecipes: ReadonlyArray<Recipe> = [
  {
    id: 1,
    name: "Ojingeo Muchim",
    difificulty: "Facil",
    preparationTime: "10 min",
    imgUrl: "../assets/Ojingeo-muchim-5.png",
    usersRating: 5.0,
    servings: 4
  },
  {
    id: 2,
    name: "Cola Chicken",
    difificulty: "Facil",
    preparationTime: "10 min",
    imgUrl: "../assets/Ojingeo-muchim.png",
    usersRating: 5.0,
    servings: 4
  },
  {
    id: 3,
    name: "Roasted Carrot",
    difificulty: "Facil",
    preparationTime: "10 min",
    imgUrl: "../assets/Ojingeo-muchim-1.png",
    usersRating: 4.5,
    servings: 4
  },
  {
    id: 4,
    name: "Sweet cherries",
    difificulty: "Facil",
    preparationTime: "10 min",
    imgUrl: "../assets/cherry.png",
    usersRating: 4.0,
    servings: 4
  }
]

const RecipesSection = () => {
  return (
    <section>
      <div className="recipes-section-container">
        <div className="recipes-section-title">Nuevas Recetas</div>
        <div className="recipes-section-content">
          <div className="recipes-section-list">
            {popularRecipes.map((recipe) => (
              <RecipeItem key={`recipe-${recipe.id}`} recipe={recipe} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecipesSection;