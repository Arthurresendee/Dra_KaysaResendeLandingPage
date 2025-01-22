import { Link } from "react-router-dom";
import styles from "./Header.module.css";

import logoHeader from "../../assets/iconeNoNavegador.ico";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img src={logoHeader} alt="Logo" className={styles.logo} />
        </div>
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            <li className={styles.item}>
              <Link to="/adm/home" className={styles.link}>
                Home
              </Link>
            </li>
            <li className={styles.item}>
              <Link to="/adm/galeria" className={styles.link}>
                Galeria
              </Link>
            </li>
            <li className={styles.item}>
              <Link to="/adm" className={styles.link}>
                Inicial
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
