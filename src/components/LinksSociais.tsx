import styles from "./LinksSociais.module.css";
import whatsappIcon from "../assets/whatssapp.svg";
import instagramIcon from "../assets/instagram.svg";
import facebookIcon from "../assets/facebook.svg";

export function LinksSociais() {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a
            className={styles.link}
            href="https://api.whatsapp.com/send?phone=5534984224848&text=Ol%C3%A1,%20quero%20fazer%20um%20agendamento!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.icon}
              src={whatsappIcon}
              alt="Ícone WhatsApp"
            />
          </a>
        </li>

        <li className={styles.item}>
          <a
            className={styles.link}
            href="https://www.instagram.com/drakaysa_resende/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.icon}
              src={instagramIcon}
              alt="Ícone Instagram"
            />
          </a>
        </li>

        <li className={styles.item}>
          <a
            className={styles.link}
            href="https://www.facebook.com/kaysa.resende.1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.icon}
              src={facebookIcon}
              alt="Ícone Facebook"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
