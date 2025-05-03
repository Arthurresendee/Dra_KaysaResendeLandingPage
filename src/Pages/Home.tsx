import { useEffect, useState } from "react";
import axios from "axios";
import { Footer } from "../components/Footer";
import { LinksSociais } from "../components/LinksSociais";
import { MapaFooter } from "../components/MapaFooter";
import { TopicoSection } from "../components/section-cards/TopicoSection";
import { GaleriaSection } from "../components/Section-galeria/GaleriaSection";
import { Hero } from "../components/section-hero/Hero";
import { Sobre } from "../components/section-sobre/Sobre";
import { SobreAClinicaProps, SobreAClinica } from "../components/section-sobreAClinica/SobreAClinica";

const mapaSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.3756057354963!2d-48.194807589779415!3d-18.647133682398017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a431c9d3026281%3A0xa869d7efb43f2718!2sTower%20Office!5e0!3m2!1spt-BR!2sbr!4v1715432306895!5m2!1spt-BR!2sbr";

const sobreAClinicaObject: SobreAClinicaProps = {
  titulo: "Dra. Kaysa Resende",
  subtitulo: "ODONTOLOGIA ESTÉTICA",
  urlVideo:
    "https://www.youtube.com/embed/BMaaYcm0INE?si=lTrmHBTYcHt1XQJb&amp;controls=0",
};

export function Home() {
  const [topicos, setTopicos] = useState([]);

  useEffect(() => {
    // Chama a API para buscar os dados
    axios
      .get("https://api.drakaysa.com.br/api/topicos")
      .then((response) => {
        // Atualiza o estado com os dados da API
        setTopicos(response.data);
        console.log("Tópicos carregados com sucesso:", response);
      })
      .catch((error) => {
        console.error("Erro ao buscar os tópicos da API:", error);
      });
  }, []);

  return (
    <div>
      <LinksSociais />
      <Hero />
      <GaleriaSection />
      <TopicoSection topicos={topicos} />
      <Sobre />
      <SobreAClinica object={sobreAClinicaObject} />
      <MapaFooter mapaSrc={mapaSrc} />
      <Footer />
    </div>
  );
}
