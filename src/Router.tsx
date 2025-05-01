import { Routes, Route } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayoutl";
import { Galeria } from "./Pages/Galeria";
// import { GaleriaAdm } from "./Pages/GaleriaAdm";
import { Home } from "./Pages/Home";
import { InicialAdm } from "./Pages/InicialAdm";
import { LandingPageAdm } from "./Pages/LandingPageAdm";
import GaleriaAdm from "./Pages/GaleriaAdm";
import Login from "./Pages/Login";
import { Configuracoes } from "./Pages/Configuracoes";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/galeria" element={<Galeria />} />
      <Route path="/login" element={<Login />} />

      <Route path="/adm" element={<AdminLayout/>} >
        <Route index element={<InicialAdm />} />
        <Route path="inicial" element={<InicialAdm/>} />
        <Route path="landingPage" element={<LandingPageAdm/>} />
        <Route path="galeria" element={<GaleriaAdm/>} />
        <Route path="configuracoes" element={<Configuracoes/>} />
      </Route>
    </Routes>
  );
}
