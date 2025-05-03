import styles from "./ImagemGaleriaSection.module.css";
import imagemGaleria from "../../assets/ImagemGaleria.jpeg";
import { ScrollAnimation } from "../ScrollAnimation";

export function ImagemGaleriaSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <ScrollAnimation direction="top">
          <h2 className={styles.title}>Nossa Galeria</h2>
          <p className={styles.subtitle}>Conheça alguns dos nossos trabalhos</p>
        </ScrollAnimation>

        <div className={styles.galleryGrid}>
          <ScrollAnimation direction="left">
            <div className={styles.imageWrapper}>
              <img
                src={imagemGaleria}
                alt="Galeria de Fotos"
                className={styles.image}
              />
              <div className={styles.overlay}>
                <p className={styles.description}>Antes e Depois</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
