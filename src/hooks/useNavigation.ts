import { useContext, useEffect } from "react";
import { AppContext } from "../store/context";
import { AppState } from "../models/app.model";
import { NavigationItem, NavigationPaths } from "../models/navItem.model";
import { navigationConfig } from "../config/navigationConfig";
import { setRecipesListAction, changeNavigationAction } from "../store/actions";
import { getRecipes } from "../services/recipes";

export const useNavigation = (): [AppState, (route: NavigationPaths) => void] => {
  const { state, dispatch } = useContext(AppContext);

  const handleChangeNavigation = (route: NavigationPaths) => {
    dispatch(changeNavigationAction(route));
  }

  useEffect(() => {
    if (state.currentRoute) {
      const navigationRoute: NavigationItem | undefined = navigationConfig.find((navigationItem) =>
        navigationItem.path === state.currentRoute
      );
      
      if (navigationRoute?.queryParams) {
        getRecipes(navigationRoute.queryParams).then(
          (res) => {
            dispatch(setRecipesListAction(res.results))
          }
        )
      }
    }
    // eslint-disable-next-line
  }, [state.currentRoute]);

  return [state, handleChangeNavigation]
}