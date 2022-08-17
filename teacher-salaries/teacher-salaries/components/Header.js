import styles from "../styles/Header.module.css";

function Header() {
  return (
    <header class="module-site-header state-bg-black">
      <div class="layout-container">
        <nav class="layout-flex layout-space-between">
          <div>
            <a
              class="state-font-white state-text-bold state-links-hover"
              href="/"
            >
              <span>Texas Teacher Salaries</span>
            </a>
          </div>

          <button
            class="mobile-nav-toggle"
            aria-controls="primary-navigation"
            aria-expanded="false"
          >
            <span></span>
          </button>

          <ul
            data-visible="false"
            class="layout-flex primary-navigation module-gap"
          >
            <li>
              <a class="state-font-white state-links-hover" href="/austin">
                <span>Austin Metro</span>
              </a>
            </li>
            <li>
              <a class="state-font-white state-links-hover" href="/dallas">
                <span>Dallas Metro</span>
              </a>
            </li>
            <li>
              <a class="state-font-white state-links-hover" href="/houston">
                <span>Houston Metro</span>
              </a>
            </li>
            <li>
              <a class="state-font-white state-links-hover" href="/san-antonio">
                <span>San Antonio Metro</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
