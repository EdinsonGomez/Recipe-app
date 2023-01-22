import { NavigationPaths } from "../models/navItem.model";
import { navigationConfig } from "../config/navigationConfig";
import { useNavigation } from "../hooks/useNavigation";
import "../styles/header.scss";

const Header = () => {
  const [state, handleChangeNavigation] = useNavigation();
  return (
    <>
      <div className="header-container">
        <div className="header-content">
          <div className="header-title">Recetas</div>
          <div className="header-subtitle">para todos</div>
        </div>
      </div>
      <div className="navigation-alt">
        <div className="navigation-alt-content">
          {navigationConfig
            .filter((navigationItem) => navigationItem.path !== NavigationPaths.HOME)
            .map((navigationItem) => (
              <div
                key={navigationItem.path}
                className={`navigation-alt-item ${state.currentRoute === navigationItem.path ? "active" : ""}`}
                onClick={() => handleChangeNavigation(navigationItem.path)}
              >
                <img className="navigation-alt-item-img" src={navigationItem.icon} alt={navigationItem.path} />
                <span className="navigation-alt-item-text">{navigationItem.name}</span>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
};

export default Header;