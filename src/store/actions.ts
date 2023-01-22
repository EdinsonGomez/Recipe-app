import { ActionType, ChangeNavigation, SetRecipesList } from "../models/actions.model";
import { RecipeResponseApi } from "../models/recipeRequest.model";
import { NavigationPaths } from "../models/navItem.model";

export const changeNavigationAction = (route: NavigationPaths): ChangeNavigation => ({
  type: ActionType.CHANGE_NAVIGATION,
  payload: route
});

export const setRecipesListAction = (newList: RecipeResponseApi[]): SetRecipesList => ({
  type: ActionType.SET_RECIPES_LIST,
  payload: {
    list: newList
  }
});
