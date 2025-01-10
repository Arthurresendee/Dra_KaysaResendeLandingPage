import styles from "./TopicoSection.module.css";

interface Card {
  titulo: string;
  texto: string;
}

export interface Topico {
  id: Number;
  tituloTopico: string;
  cards: Card[];
}

interface TopicoType {
  topicos: Topico[];
}

export function TopicoSection({ topicos }: TopicoType) {
  return (
    <div className={styles.topicos}>
      {topicos.map((topico) => {
        return (
          <div className={styles.container}>
            <h2 className={styles.TituloTopico}>{topico.tituloTopico}</h2>
            <div className={styles.containerCards}>
              {topico.cards.map((card) => {
                return (
                  <div className={styles.card}>
                    <h3>{card.titulo}</h3>
                    <p>{card.texto}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
