import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
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
          aria-controls="primary-navigation"
          aria-expanded="false"
        >
          <span></span>
        </button>

        <ul
          data-visible="false"
          className="layout-flex primary-navigation module-gap"
        >
          <li>
            <Link href="/metro/austin">
              <a className="state-font-white state-links-hover">Austin Metro</a>
            </Link>
          </li>
          <li>
            <Link href="/metro/dallas">
              <a className="state-font-white state-links-hover">Dallas Metro</a>
            </Link>
          </li>
          <li>
            <Link href="/metro/houston">
              <a className="state-font-white state-links-hover">
                Houston Metro
              </a>
            </Link>
          </li>
          <li>
            <Link href="/metro/san-antonio">
              <a className="state-font-white state-links-hover">
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
