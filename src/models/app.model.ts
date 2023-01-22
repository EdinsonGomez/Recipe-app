import { Recipe } from "./recipe.model";
import { NavigationPaths } from "./navItem.model";

export interface AppState {
  recipeList: Recipe[]
  currentRoute: NavigationPaths
}