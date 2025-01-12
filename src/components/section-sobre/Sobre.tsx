import ImgFundo from '../../assets/backgroundSobre.jpg'
import { PlanoDeFundo } from '../PlanoDeFundo';
import { Content, Conteudo, ConteudoFinal } from './Conteudo';
import { Paragrafo } from './Conteudo';

const paragrafos: Paragrafo[] = [
   {
      conteudo: "✨ Por coincidência, acabei caindo de paraquedas no curso de odontologia e foi paixão à primeira vista. Me encontrei profissionalmente. Sinto que essa é a minha missão, cuidar da saúde e autoestima das pessoas."
   },
   {
      conteudo: "😊 Vê-las realizadas me traz uma felicidade imensa! Sentir empatia e afeto, até mesmo por meus pacientes, é algo que vem de dentro, totalmente transparente."
   },
   {
      conteudo: "🙏 Sinto que isso seja um talento e uma missão confiada por Deus. De onde vim, era certo que não iria conseguir me tornar o que sou hoje em meio às dificuldades e desafios, mas minha determinação e vontade de vencer ultrapassaram todas as adversidades e me tornaram quem sou hoje."
   },
   {
      conteudo: "💪 Dedico meu esforço máximo para 'transformar vidas e sorrisos' com meu trabalho, e assim trazer orgulho à minha família."
   }
]

const conteudo: Content = {
   titulo: "QUEM É DRA. KAYSA ?",
   topicos: paragrafos
}

const conteudoFinal: ConteudoFinal ={
   conteudoCompleto: conteudo
}

console.log(conteudoFinal)

export function Sobre() {
   return (
      <PlanoDeFundo imagemDeFundoURL={ImgFundo} heightSessao='90vh'>
         <Conteudo conteudoCompleto={conteudoFinal.conteudoCompleto} />
      </PlanoDeFundo>
   );
}
