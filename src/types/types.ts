export interface Card {
   id: number;
   titulo: string;
   texto: string;
   topicoId: number;
 }
 
 export interface Topico {
   id: number;
   tituloTopico: string;
   cards: Card[];
 }
 
 export interface TopicoType {
   topicos: Topico[];
 }
 