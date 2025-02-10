import { useState } from "react";
import { Card, Topico } from "../types/types";

export const useTopicoManager = () => {
  const [topicos, setTopicos] = useState<Topico[]>([]);

  const adicionarTopico = (tituloTopico: string) => {
    const novoTopico: Topico = {
      id: topicos.length + 1,
      tituloTopico,
      cards: [],
    };
    setTopicos([...topicos, novoTopico]);
  };

  const excluirTopico = (idTopico: number) => {
    if (window.confirm("Tem certeza de que deseja excluir este tópico?")) {
      setTopicos((prevTopicos) => prevTopicos.filter((topico) => topico.id !== idTopico));
    }
  };

  const adicionarCard = (idTopico: number, novoCard: Omit<Card, "id">) => {
    const novoCardComId: Card = {
      ...novoCard,
      id: Math.max(...topicos.flatMap((topico) => topico.cards.map((card) => card.id)), 0) + 1,
    };
    setTopicos((prevTopicos) =>
      prevTopicos.map((topico) =>
        topico.id === idTopico ? { ...topico, cards: [...topico.cards, novoCardComId] } : topico
      )
    );
  };

  const editarCard = (idTopico: number, cardEditado: Card) => {
    setTopicos((prevTopicos) =>
      prevTopicos.map((topico) =>
        topico.id === idTopico
          ? { ...topico, cards: topico.cards.map((card) => (card.id === cardEditado.id ? cardEditado : card)) }
          : topico
      )
    );
  };

  const excluirCard = (idTopico: number, idCard: number) => {
    setTopicos((prevTopicos) =>
      prevTopicos.map((topico) =>
        topico.id === idTopico
          ? { ...topico, cards: topico.cards.filter((card) => card.id !== idCard) }
          : topico
      )
    );
  };

  return { topicos, adicionarTopico, excluirTopico, adicionarCard, editarCard, excluirCard };
};
