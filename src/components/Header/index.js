import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("wrapper")}>
      <header className={cx("header")}>
        <div className={cx("logo")}>
          <Link to="/" className={cx("logo-link")}>
            My Store
          </Link>
        </div>
        <ul className={cx("navigation-list")}>
          <li className={cx("navigation-item")}>
            <NavLink
              to="/iphone"
              className={(nav) =>
                cx("navigation-link", { active: nav.isActive })
              }
            >
              iPhone
            </NavLink>
          </li>
          <li className={cx("navigation-item")}>
            <NavLink
              to="/ipad"
              className={(nav) =>
                cx("navigation-link", { active: nav.isActive })
              }
            >
              iPad
            </NavLink>
          </li>
          <li className={cx("navigation-item")}>
            <NavLink
              to="/mac"
              className={(nav) =>
                cx("navigation-link", { active: nav.isActive })
              }
            >
              Mac
            </NavLink>
          </li>
          <li className={cx("navigation-item")}>
            <NavLink
              to="/apple-watch"
              className={(nav) =>
                cx("navigation-link", { active: nav.isActive })
              }
            >
              Apple Watch
            </NavLink>
          </li>
          <li className={cx("navigation-item")}>
            <NavLink
              to="/am-thanh"
              className={(nav) =>
                cx("navigation-link", { active: nav.isActive })
              }
            >
              Âm thanh
            </NavLink>
          </li>
          <li className={cx("navigation-item")}>
            <NavLink
              to="/phu-kien"
              className={(nav) =>
                cx("navigation-link", { active: nav.isActive })
              }
            >
              Phụ kiện
            </NavLink>
          </li>
        </ul>
        <div className={cx("actions")}>
          <div className={cx("search")}>
            <Link to="/search">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className={cx("search-icon")}
              />
            </Link>
          </div>
          <div className={cx("cart")}>
            <Link to="/cart">
              <FontAwesomeIcon
                icon={faCartShopping}
                className={cx("cart-icon")}
              />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
