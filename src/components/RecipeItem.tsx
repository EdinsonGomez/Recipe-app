import { Recipe } from "../models/recipe.model";
import "../styles/recipeItem.scss";
import StartIcon from "../assets/icons/ic_star.svg";
import LikeIcon from "../assets/icons/ic-favorite.svg";
import ServingIcon from "../assets/icons/ic_portion.svg";
import TimeIcon from "../assets/icons/ic_time.svg";
import ChefIcon from "../assets/icons/ic_chef.svg";

interface RecipeItemProps {
  recipe: Recipe
}

type RecipeDetail = {
  icon: string
  label: string
  fieldName: string
}

const getDetailValue = (recipe: Recipe, fieldName: string): string | number | null => {
  const keys: Array<Array<string | number>> = Object.entries(recipe);
  let res = null;

  keys.forEach(([key, value]) => {
    if (key === fieldName) {
      res = value;
    }
  });

  return res;
}

const detailsList: ReadonlyArray<RecipeDetail> = [
  { icon: ServingIcon, label: "Tamaño de porción", fieldName: "servings" },
  { icon: TimeIcon, label: "Tiempo de preparación", fieldName: "preparationTime" },
  { icon: ChefIcon, label: "Dificultad", fieldName: "difificulty" }
]

const RecipeItem = ({ recipe }: RecipeItemProps) => {

  return (
    <div className="recipe-item">
      <div className="recipe-item-img">
        <img src={recipe.imgUrl} alt={recipe.name} />
      </div>
      <div className="recipe-item-content">
        <div className="recipe-item-content-name">{recipe.name}</div>
        <div className="recipe-item-content-footer">
          <div className="recipe-item-content-rating">
            <img src={StartIcon} alt={`start-icon-${recipe.name}`} />
            <span>{recipe.usersRating?.toFixed(1)}</span>
          </div>
          <div className="recipe-item-content-like">
            <img src={LikeIcon} alt={`favorite-icon-${recipe.name}`} />
          </div>
        </div>
      </div>
      <div className="recipe-item-details">
        {detailsList.map((detail) => (
          <div key={`detail-${recipe.id}-${detail.label}`} className="recipe-item-details-det">
            <img className="recipe-item-details-item" src={detail.icon} alt={`${detail.label}-${recipe.id}`} />
            <p className="recipe-item-details-label recipe-item-details-item">{detail.label}</p>
            <p className="recipe-item-details-value recipe-item-details-item">
              {getDetailValue(recipe, detail.fieldName) ?? "--"}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
};

export default RecipeItem;