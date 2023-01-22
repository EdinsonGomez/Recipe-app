import { RecipeResponseApi } from "./recipeRequest.model";
import { NavigationPaths } from "./navItem.model";

export enum ActionType {
  CHANGE_NAVIGATION = "@navigation/change",
  SET_RECIPES_LIST = "@recipes/list/set"
}

export interface ChangeNavigation {
  type: ActionType.CHANGE_NAVIGATION
  payload: NavigationPaths
}

export interface SetRecipesList {
  type: ActionType.SET_RECIPES_LIST
  payload: {
    list: RecipeResponseApi[]
  }
}

export type AppActions = ChangeNavigation | SetRecipesList;