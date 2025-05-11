import styles from "./Galeria.module.css";
import ImagemGaleria from "../../assets/ImagemGaleria.jpeg";
import { useNavigate } from "react-router-dom";

export function GaleriaSection() {
  const navigate = useNavigate();
  return (
    <div className={styles.galeriaContainer}>
      <div className={styles.sectionEsquerda}>
        <div>
          <h2 className={styles.tituloGaleria}>Nossa Galeria</h2>
          <p className={styles.textoGaleria}>
            Explore resultados reais, sorrisos transformados e o ambiente acolhedor da nossa clínica. Veja como a estética e o cuidado se unem para criar experiências únicas para nossos pacientes.
          </p>
          <button
            className={styles.botaoGaleria}
            onClick={() => navigate("/galeria")}
            type="button"
          >
            Ver Galeria Completa
          </button>
        </div>
      </div>
      <div className={styles.sectionDireita}>
        <img
          src={ImagemGaleria}
          alt="Galeria da clínica"
          className={styles.imagemGaleria}
        />
      </div>
    </div>
  );
}
