import { Card } from "../../../Hooks/useTopicoManager";
import styles from './ListaCards.module.css'

interface ListaCardsProps {
  cards: Card[];
  onEditar: (card: Card) => void;
  onExcluir: (id: number) => void;
}

export default function ListaCards({ cards, onEditar, onExcluir }: ListaCardsProps) {
  return (
    <div className={styles.container}>
      <h2>Lista de Cards</h2>
      <ul className={styles.listaCards}>
        {cards.map((card) => (
          <li key={card.id} className={styles.cardItem}>
            <h3>{card.titulo}</h3>
            <p>{card.texto}</p>
            <div className={styles.cardActions}>
              <button onClick={() => onEditar(card)}>Editar</button>
              <button onClick={() => onExcluir(card.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
