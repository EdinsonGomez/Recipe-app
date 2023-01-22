import { useContext, useEffect } from "react";
import { AppContext } from "../store/context";
import { getRecipes } from "../services/recipes";
import { NavigationPaths, NavigationItem } from "../models/navItem.model";
import { changeNavigationAction, setRecipesListAction } from "../store/actions";
import { navigationConfig } from "../config/navigationConfig";
import { mapFromApiToRecipes } from "../utils/recipes";
import "../styles/navigation.scss";

const NavBar = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleClick = (route: NavigationPaths) => {
    dispatch(changeNavigationAction(route));
  }

  useEffect(() => {
    // if (state.currentRoute === NavigationPaths.HOME) {
      const navigationRoute: NavigationItem | undefined = navigationConfig.find((navigationItem) => navigationItem.path === state.currentRoute);
      
      if (navigationRoute?.queryParams) {
        getRecipes(navigationRoute.queryParams).then(
          (res) => {
            dispatch(setRecipesListAction(res.results))
          }
        )
      }
    // }
  }, [state.currentRoute])

  return (
    <nav className="navigation-content">
      <div className="navigation-name">
        <span className="navigation-name-left">Recipe</span>
        <span className="navigation-name-right">App</span>
      </div>
      <div className="navigation-items-content">
        {navigationConfig.map((navigationItem) => (
          <button
            key={`${navigationItem.path}-nav`}
            type="button"
            className={`navigation-items-link ${state.currentRoute === navigationItem.path ? "active" : ""}`}
            onClick={() => handleClick(navigationItem.path)}
          >
            {navigationItem.name}
          </button>
        ))}  
      </div>
      <button className="navigation-item-home">
        <img src="../assets/icons/ic_home.svg" alt="home-icon" />
      </button>
    </nav>
  );
};

export default NavBar;
