import { useState } from "react";
import { ScrollAnimation } from "../ScrollAnimation";
import { Manutencao } from "../Manutencao";
import styles from "./IrParaGaleriaSection.module.css";

export function IrParaGaleriaSection() {
  const [mostrarManutencao, setMostrarManutencao] = useState(false);

  const handleVerDepoimentos = () => {
    setMostrarManutencao(true);
  };

  const handleVoltar = () => {
    setMostrarManutencao(false);
  };

  return (
    <>
      {mostrarManutencao ? (
        <Manutencao onVoltar={handleVoltar} />
      ) : (
        <ScrollAnimation direction="left">
          <div className={styles.container}>
            <h1 className={styles.titulo}>Agora chegou a sua Hora!</h1>
            <p className={styles.texto}>
              Quanto vale para você ter um <strong>Sorriso Perfeito</strong>,
              aumentar sua <strong>Autoestima</strong> e perder o medo de
              <strong> Sorrir</strong>?
            </p>
            <div className={styles.botaoContainer}>
              <button className={styles.botao} onClick={handleVerDepoimentos}>
                Ver Depoimentos e Antes & Depois
              </button>
            </div>
          </div>
        </ScrollAnimation>
      )}
    </>
  );
}
