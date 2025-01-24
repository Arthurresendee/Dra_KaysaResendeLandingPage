import { useState } from "react";

// Define a estrutura de um card individual
export interface Card {
  id: number;
  titulo: string;
  texto: string;
}

// Define a estrutura de um tópico
// Um tópico tem um ID único, um título e uma lista de cards
// ATENÇÃO: A ideia é limitar para no máximo 3 cards por tópico
export interface Topico {
  id: number;
  tituloTopico: string;
  cards: Card[]; // Array de cards dentro do tópico
}

// Hook personalizado para gerenciar tópicos e cards
// Encapsula toda a lógica de manipulação de estado em um único lugar
export const useTopicoManager = () => {
  // Cria um estado para armazenar todos os tópicos
  // useState<Topico[]>([]) inicializa o estado como um array vazio de tópicos
  const [topicos, setTopicos] = useState<Topico[]>([]);

  /**
   * Adiciona um novo tópico à lista de tópicos
   * @param tituloTopico - Título do novo tópico a ser criado
   * 
   * Passos importantes:
   * 1. Cria um novo objeto de tópico
   * 2. Gera um ID sequencial baseado no número atual de tópicos
   * 3. Inicializa com um array de cards vazio
   */
  const adicionarTopico = (tituloTopico: string) => {
    // Cria um novo tópico com ID incremental e cards vazios
    const novoTopico: Topico = {
      id: topicos.length + 1, // Gera ID baseado na quantidade atual de tópicos
      tituloTopico,
      cards: [], // Começa sem nenhum card
    };
    
    // Cria um novo array
    // Copia todos os tópicos existentes
    // Adiciona o novo tópico no final
    setTopicos([...topicos, novoTopico]);
  };

  /**
   * Remove um tópico específico
   * @param idTopico - Identificador do tópico a ser removido
   * 
   * Funcionalidades:
   * 1. Mostra confirmação antes de excluir
   * 2. Filtra o tópico com o ID correspondente
   */
  const excluirTopico = (idTopico: number) => {
    // Pede confirmação antes de excluir para prevenir exclusões acidentais
    if (window.confirm("Tem certeza de que deseja excluir este tópico?")) {
      // Usa filter para criar um novo array sem o tópico selecionado
      setTopicos((prevTopicos) => prevTopicos.filter((topico) => topico.id !== idTopico));
    }
  };

  /**
   * Adiciona um novo card a um tópico específico
   * @param idTopico - ID do tópico que receberá o card
   * @param novoCard - Informações do novo card (sem ID)
   * 
   * Passos complexos:
   * 1. Gera um ID único para o novo card
   * 2. Encontra o tópico correto para adicionar
   * 3. Mantém a imutabilidade do estado
   */
  const adicionarCard = (idTopico: number, novoCard: Omit<Card, "id">) => {
    // Gera ID único para o novo card
    // Encontra o maior ID atual em todos os cards de todos os tópicos
    const novoCardComId: Card = {
      ...novoCard,
      id: Math.max(...topicos.flatMap((topico) => topico.cards.map((card) => card.id)), 0) + 1,
    };
    
    // Atualiza o estado, adicionando o novo card ao tópico correto
    setTopicos((prevTopicos) =>
      prevTopicos.map((topico) =>
        topico.id === idTopico
          ? { ...topico, cards: [...topico.cards, novoCardComId] } // Adiciona o novo card
          : topico // Mantém os outros tópicos inalterados
      )
    );
  };

  /**
   * Edita as informações de um card existente
   * @param idTopico - ID do tópico que contém o card
   * @param cardEditado - Objeto do card com informações atualizadas
   * 
   * Características:
   * 1. Localiza o tópico correto
   * 2. Substitui apenas o card específico
   * 3. Mantém outros cards e tópicos intactos
   */
  const editarCard = (idTopico: number, cardEditado: Card) => {
    setTopicos((prevTopicos) =>
      prevTopicos.map((topico) =>
        topico.id === idTopico
          ? {
              ...topico,
              cards: topico.cards.map((card) =>
                card.id === cardEditado.id ? cardEditado : card
              ),
            }
          : topico
      )
    );
  };

  /**
   * Remove um card específico de um tópico
   * @param idTopico - ID do tópico que contém o card
   * @param idCard - ID do card a ser removido
   * 
   * Processo:
   * 1. Encontra o tópico correto
   * 2. Remove apenas o card com o ID específico
   * 3. Mantém a estrutura de dados imutável
   */
  const excluirCard = (idTopico: number, idCard: number) => {
    setTopicos((prevTopicos) =>
      prevTopicos.map((topico) =>
        topico.id === idTopico
          ? {
              ...topico,
              cards: topico.cards.filter((card) => card.id !== idCard), // Remove o card específico
            }
          : topico
      )
    );
  };

  // Retorna o estado e todas as funções para manipulação
  // Permite que componentes externos usem estas funcionalidades
  return {
    topicos, // Lista completa de tópicos
    adicionarTopico, // Função para criar novos tópicos
    excluirTopico, // Função para remover tópicos
    adicionarCard, // Função para adicionar cards
    editarCard, // Função para editar cards existentes
    excluirCard, // Função para remover cards
  };
};