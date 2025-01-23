import styles from "./VisaoGeral.module.css";

export function VisaoGeral() {
  const dados = [
    { titulo: "Total de Imagens", valor: 12 },
    { titulo: "Cards na Landing Page", valor: 5 },
  ];

  return (
    <div className={styles.visaoGeral}>
      {dados.map((item, index) => (
        <div key={index} className={styles.card}>
          <h2>{item.valor}</h2>
          <p>{item.titulo}</p>
        </div>
      ))}
    </div>
  );
}
