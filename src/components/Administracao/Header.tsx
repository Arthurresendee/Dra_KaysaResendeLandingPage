import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>Admin</h1>
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
          </ul>
        </nav>
      </div>
    </header>
  );
}
