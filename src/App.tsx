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
        titulo: "Estética natural",
        texto:
          "Quando bem executadas, as facetas em resina oferecem uma aparência natural, imitando a translucidez e cor dos dentes.",
      },
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
    ],
  },
  {
    id: 2,
    tituloTopico: "Etapas das Facetas",
    cards: [
      {
        titulo: "Consulta Inicial",
        texto:
          "O dentista faz uma avaliação completa e um planejamento individualizado do paciente.",
      },
      {
        titulo: "Preparação",
        texto:
          "São feitos procedimentos prévios, como exame radiográfico, avaliação clínica detalhada e um protocolo fotográfico.",
      },
      {
        titulo: "Aplicação",
        texto:
          "A faceta é colocada e ajustada no dente, sendo esculpida à mão livre pelo profissional, garantindo uma adaptação perfeita e um sorriso individualizado.",
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
