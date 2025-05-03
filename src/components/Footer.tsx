import styles from "./Footer.module.css";

import facebookIcon from '../assets/facebook.svg';
import instagramIcon from '../assets/instagram.svg';
import whatsappIcon from '../assets/whatssapp.svg';
import logoFooter from '../assets/DraKAysa.png';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <img
          src={logoFooter}
          alt="Logo da Dra. Kaysa no footer"
          className={styles.logo}
        />
        <div className={styles.footerIcons}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/drakaysa_resende/"
          >
            <img src={instagramIcon} alt="Instagram" className={styles.icon} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/kaysa.resende.1"
          >
            <img src={facebookIcon} alt="Facebook" className={styles.icon} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://api.whatsapp.com/send?phone=5534984224848&text=Ol%C3%A1,%20quero%20fazer%20um%20agendamento!"
          >
            <img src={whatsappIcon} alt="WhatsApp" className={styles.icon} />
          </a>
        </div>
      </div>
      <p className={styles.footerText}>
        Todos os direitos reservados. © 2024 Dra. Kaysa Resende.
      </p>
    </footer>
  );
}
