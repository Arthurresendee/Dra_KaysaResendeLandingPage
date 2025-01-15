import "./index.css";

import { LinksSociais } from "./components/LinksSociais";
import { Home } from "./components/section-home/Home.tsx";
import {
  Topico,
  TopicoSection,
} from "./components/section-cards/TopicoSection";
import { GaleriaSection } from "./components/Section-galeria/GaleriaSection.tsx";
import { Sobre } from "./components/section-sobre/Sobre";
import {
  SobreAClinica,
  SobreAClinicaProps,
} from "./components/section-sobreAClinica/SobreAClinica";
import { MapaFooter } from "./components/MapaFooter";
import { Footer } from "./components/Footer";

const mapaSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.3756057354963!2d-48.194807589779415!3d-18.647133682398017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a431c9d3026281%3A0xa869d7efb43f2718!2sTower%20Office!5e0!3m2!1spt-BR!2sbr!4v1715432306895!5m2!1spt-BR!2sbr";

const listaDeTopicos: Topico[] = [
  {
    id: 1,
    tituloTopico: "Benefícios",
    cards: [
      {
        titulo: "Melhora Estética",
        texto:
          "Transforma a aparência dos dentes, corrigindo imperfeições como manchas, descolorações, desgastes, espaçamentos e desalinhamentos leves.",
      },
      {
        titulo: "Procedimento menos invasivo",
        texto:
          "Diferente das facetas de porcelana, as facetas em resina podem ser aplicadas com mínimo ou nenhum desgaste da estrutura dental natural.",
      },
      {
        titulo: "Estética natural",
        texto:
          "As facetas em resina proporcionam uma aparência altamente natural, reproduzindo com precisão a translucidez, o brilho e a cor dos dentes, garantindo um sorriso harmonioso e autêntico.",
      },
    ],
  },
  {
    id: 2,
    tituloTopico: "Perguntas Frequentes",
    cards: [
      {
        titulo: "Quanto tempo dura o tratamento?",
        texto:
          "Para facetas de resina, o procedimento dura cerca de 5 horas, pois cada dente é esculpido à mão com muita precisão e delicadeza.",
      },
      {
        titulo: "As facetas são resistentes?",
        texto:
          "Sim, porém, é importante evitar hábitos como roer unhas, morder objetos duros e ranger os dentes, pois esses comportamentos podem comprometer a durabilidade.",
      },
      {
        titulo: "Qual é o custo do procedimento?",
        texto:
          "O custo varia do número de dentes e da complexidade do caso. A melhor forma de determinar o valor é agendar uma consulta para avaliar as suas necessidades.",
      },
    ],
  },
];

const sobreAClinicaObject: SobreAClinicaProps = {
  titulo: "Dra. Kaysa Resende",
  subtitulo: "ODONTOLOGIA ESTÉTICA",
  urlVideo:
    "https://www.youtube.com/embed/BMaaYcm0INE?si=lTrmHBTYcHt1XQJb&amp;controls=0",
};

export function App() {
  return (
    <div>
      <LinksSociais />
      <Home />
      <GaleriaSection />
      <TopicoSection topicos={listaDeTopicos} />
      <Sobre />
      <SobreAClinica object={sobreAClinicaObject} />
      <MapaFooter mapaSrc={mapaSrc} />
      <Footer />
    </div>
  );
}

export default App;
