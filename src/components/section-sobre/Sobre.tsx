import { Content, Conteudo } from "./Conteudo";
import { Paragrafo } from "./Conteudo";

const paragrafos: Paragrafo[] = [
  {
    conteudo:
      "✨ Por coincidência, acabei caindo de paraquedas no curso de odontologia e foi paixão à primeira vista. Me encontrei profissionalmente. Sinto que essa é a minha missão, cuidar da saúde e autoestima das pessoas.",
  },
  {
    conteudo:
      "😊 Vê-las realizadas me traz uma felicidade imensa! Sentir empatia e afeto, até mesmo por meus pacientes, é algo que vem de dentro, totalmente transparente.",
  },
  {
    conteudo:
      "💪 Dedico meu esforço máximo para 'transformar vidas e sorrisos' com meu trabalho, e assim trazer orgulho à minha família.",
  },
];

const conteudo: Content = {
  titulo: "QUEM É DRA. KAYSA ?",
  topicos: paragrafos,
};

export function Sobre() {
  return <Conteudo conteudoCompleto={conteudo} />;
}
