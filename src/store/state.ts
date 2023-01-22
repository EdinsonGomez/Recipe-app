import { AppState } from "../models/app.model";
import { NavigationPaths } from "../models/navItem.model";

export const initialAppState: AppState = {
  recipeList: [],
  currentRoute: NavigationPaths.HOME
}
