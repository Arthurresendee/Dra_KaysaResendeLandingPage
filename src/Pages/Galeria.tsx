import { useNavigate } from "react-router-dom";
import styles from "./Galeria.module.css";

export function Galeria() {
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate(-1); // Navega para a página anterior no histórico
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Página em Manutenção</h1>
      <p className={styles.texto}>
        Estamos trabalhando para trazer novidades. Volte em breve!
      </p>
      <button className={styles.botao} onClick={handleVoltar}>
        Voltar
      </button>
    </div>
  );
}
