import { Card } from "../../../Pages/LandingPageAdm";

interface ListaCardsProps {
  cards: Card[];
  onEditar: (card: Card) => void;
  onExcluir: (id: number) => void;
}

export default function ListaCards({ cards, onEditar, onExcluir }: ListaCardsProps) {
  return (
    <div>
      <h2>Lista de Cards</h2>
      <ul>
        {cards.map((card) => (
          <li key={card.id}>
            <h3>{card.titulo}</h3>
            <p>{card.texto}</p>
            <button onClick={() => onEditar(card)}>Editar</button>
            <button onClick={() => onExcluir(card.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
