import styles from "./Manutencao.module.css";

interface ManutencaoProps {
  onVoltar: () => void;
}

export function Manutencao({ onVoltar }: ManutencaoProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Página em Manutenção</h1>
      <p className={styles.texto}>
        Estamos trabalhando para trazer novidades. Volte em breve!
      </p>
      <button className={styles.botao} onClick={onVoltar}>
        Voltar
      </button>
    </div>
  );
}
