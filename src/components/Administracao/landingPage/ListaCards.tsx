import { Card } from '../../../types/types';
import styles from './ListaCards.module.css'; // Importa os estilos CSS do componente.

interface ListaCardsProps {
  cards: Card[]; // Propriedade que contém uma lista de cards (array de objetos do tipo `Card`).
  onExcluir: (id: number) => void; // Função callback para tratar a exclusão de um card, recebendo o ID do card.
}

// Componente responsável por renderizar a lista de cards.
export default function ListaCards({ cards, onExcluir }: ListaCardsProps) {
  return (
    <div className={styles.container}>
      <h2>Lista de Cards</h2>
      <ul className={styles.listaCards}> 
        {/* Renderiza cada card recebido como props na lista. Para cada card, exibe o título, 
        texto e adiciona botões de ação para excluir. */}
        {cards.map((card, index) => (
         
          <li key={card.id || index} className={styles.cardItem}>
            <h3>{card.titulo}</h3>
            <p>{card.texto}</p>
            <div className={styles.cardActions}>
              <button onClick={() => onExcluir(card.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
