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
 
 export interface Imagem {
   id: number;
   url: string;
   nome: string;
   dataCriacao: Date;
 }

export interface UsuarioSistema {
  id: number;
  tipoDeUsuario: number;
  acessoDeUsuario: string;
  senha: string;
  nomeCompleto: string | null;
  tipoDeSexo: string | null;
}