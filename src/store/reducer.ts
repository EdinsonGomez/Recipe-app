import { AppState } from "../models/app.model";
import { AppActions, ActionType } from "../models/actions.model";
import { mapFromApiToRecipes } from "../utils/recipes";

export const reducer = (state: AppState, action: AppActions): AppState => {
  switch (action.type) {
    case ActionType.CHANGE_NAVIGATION:
      return { ...state, currentRoute: action.payload };
    case ActionType.SET_RECIPES_LIST:
      const list = mapFromApiToRecipes(action.payload.list);
      return { ...state, recipeList: list };
    default:
      return state;
  }
}
