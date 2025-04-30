import { useState } from 'react';
import styles from './Hero.module.css'; 
import ImgHero from '../../../assets/ImgHero.jpg';
import { HorarioFuncionamento } from './HorarioFuncionamento';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.sectionHero}>
      <button className={styles.menuButton} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`${styles.overlay} ${isMenuOpen ? styles.open : ''}`} onClick={toggleMenu}></div>

      <aside className={`${styles.sidebar} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.sidebarHeader}>
          <h2 className={styles.sidebarTitle}>Menu</h2>
          <button className={styles.closeButton} onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <a className={styles.menuLink} onClick={handleLogin}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                <polyline points="10 17 15 12 10 7"/>
                <line x1="15" y1="12" x2="3" y2="12"/>
              </svg>
              Login
            </a>
          </li>
        </ul>
      </aside>

      <div className={styles.backgroundWrapper}>
        <img className={styles.backgroundImage} src={ImgHero} alt="Imagem Hero" />
      </div>
      <div className={styles.overlayContent}>
        <HorarioFuncionamento />
      </div>
    </div>
  );
}
