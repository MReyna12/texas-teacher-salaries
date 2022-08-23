import { useState } from "react";
import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenuToggle() {
    setShowMenu((prevState) => !prevState);
  }

  return (
    <nav className={`${navStyles["module-site-header"]} state-bg-black`}>
      <div className="layout-flex layout-container layout-align-items-center layout-space-between">
        <div>
          <Link href="/">
            <a className="state-font-white state-text-bold state-links-hover">
              Texas Teacher Salaries
            </a>
          </Link>
        </div>

        <button
          className={`${navStyles["mobile-nav-toggle"]}`}
          onClick={handleMenuToggle}
          aria-controls={navStyles["primary-navigation"]}
          aria-expanded={showMenu}
        >
          <span></span>
        </button>

        <ul
          data-visible={showMenu}
          className={`layout-flex ${navStyles["primary-navigation"]} module-gap`}
        >
          <li>
            <Link href="/metro/austin">
              <a
                onClick={handleMenuToggle}
                className="state-font-white state-links-hover"
              >
                Austin Metro
              </a>
            </Link>
          </li>
          <li>
            <Link href="/metro/dallas">
              <a
                onClick={handleMenuToggle}
                className="state-font-white state-links-hover"
              >
                Dallas Metro
              </a>
            </Link>
          </li>
          <li>
            <Link href="/metro/houston">
              <a
                onClick={handleMenuToggle}
                className="state-font-white state-links-hover"
              >
                Houston Metro
              </a>
            </Link>
          </li>
          <li>
            <Link href="/metro/san-antonio">
              <a
                onClick={handleMenuToggle}
                className="state-font-white state-links-hover"
              >
                San Antonio Metro
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
