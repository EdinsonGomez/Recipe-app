import { NavigationPaths} from "../models/navItem.model";
import { navigationConfig } from "../config/navigationConfig";
import { useNavigation } from "../hooks/useNavigation";
import "../styles/navigation.scss";

const NavBar = () => {
  const [state, handleChangeNavigation] = useNavigation();

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
            onClick={() => handleChangeNavigation(navigationItem.path)}
          >
            {navigationItem.name}
          </button>
        ))}  
      </div>
      <button className="navigation-item-home" onClick={() => handleChangeNavigation(NavigationPaths.HOME)}>
        <img src="../assets/icons/ic_home.svg" alt="home-icon" />
      </button>
    </nav>
  );
};

export default NavBar;
