import { NavLink } from "react-router-dom";
import navigationStyles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={navigationStyles.navigation}>
      <ul className={navigationStyles.list}>
        <li className={navigationStyles.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${navigationStyles.active} ${navigationStyles.link}` : navigationStyles.link
            }
            to="/"
          >
            მთავარი
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            className={({ isActive }) =>
              isActive ? `${navigationStyles.active} ${navigationStyles.link}` : navigationStyles.link
            }
            to="/products">
            პროდუქტები
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            className={({ isActive }) =>
              isActive ? `${navigationStyles.active} ${navigationStyles.link}` : navigationStyles.link
            }
            to="/about-us">
            ჩვენ შესახებ
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            className={({ isActive }) =>
              isActive ? `${navigationStyles.active} ${navigationStyles.link}` : navigationStyles.link
            }
            to="/contact">
            კონტაქტი
          </NavLink>
        </li>
      </ul>
    </nav >
  );
}