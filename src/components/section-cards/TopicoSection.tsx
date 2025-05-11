import styles from "./TopicoSection.module.css"
import { TopicoType } from "../../types/types"

export function TopicoSection({ topicos }: TopicoType) {
  return (
    <div className={styles.topicos}>
      {topicos.map((topico, idx) => (
        <div key={`topico-${(topico as any)._id ?? topico.id ?? idx}`} className={styles.container}>
          <h2 className={styles.TituloTopico}>{topico.tituloTopico}</h2>
          <div className={styles.containerCards}>
            {topico.cards.map((card, cidx) => (
              <div key={`card-${(card as any)._id ?? card.id ?? cidx}`} className={styles.card}>
                <h3>{card.titulo}</h3>
                <p>{card.texto}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
