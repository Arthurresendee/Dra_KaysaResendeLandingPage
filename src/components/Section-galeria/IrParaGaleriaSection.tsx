import { useNavigate } from "react-router-dom";
import { ScrollAnimation } from "../ScrollAnimation";
import styles from "./IrParaGaleriaSection.module.css";

export function IrParaGaleriaSection() {
  const navigate = useNavigate();

  const handleIrParaGaleria = () => {
    navigate("/galeria"); // Redireciona para a rota '/galeria'
  };

  return (
    <ScrollAnimation direction="left">
      <div className={styles.container}>
        <h1 className={styles.titulo}>Agora chegou a sua Hora!</h1>
        <p className={styles.texto}>
          Quanto vale para você ter um <strong>Sorriso Perfeito</strong>,
          aumentar sua <strong>Autoestima</strong> e perder o medo de
          <strong> Sorrir</strong>?
        </p>
        <div className={styles.botaoContainer}>
          <button className={styles.botao} onClick={handleIrParaGaleria}>
            Ver Depoimentos / Antes & Depois
          </button>
        </div>
      </div>
    </ScrollAnimation>
  );
}
