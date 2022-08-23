import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles["module-fix-bottom"]}>
      <div className="module-section-spacing">
        <div className="layout-container layout-flex layout-flex-direction-column layout-align-items-center">
          <div
            className={`${styles["module-footer-text"]} module-text-align-center`}
          >
            <p
              className={`${styles["module-footer-paragraph"]} state-text-bold`}
            >
              Have suggestions or questions?
            </p>
            <p>send them and we will get back to you as soon as possible!</p>
          </div>
          <div>
            <a
              href="mailto:mreyna12@live.com"
              className={`${styles["module-email-button"]} state-text-bold`}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
