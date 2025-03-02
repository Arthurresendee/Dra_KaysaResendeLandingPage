import { Routes, Route } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayoutl";
import { Galeria } from "./Pages/Galeria";
// import { GaleriaAdm } from "./Pages/GaleriaAdm";
import { Home } from "./Pages/Home";
import { InicialAdm } from "./Pages/InicialAdm";
import { LandingPageAdm } from "./Pages/LandingPageAdm";
import GaleriaAdm from "./Pages/GaleriaAdm";

export function Router() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/galeria" element={<Galeria />} />

      <Route path="/adm" element={<AdminLayout/>} >
         <Route index element={<InicialAdm />} />
         <Route path="inicial" element={<InicialAdm/>} />
         <Route path="landingPage" element={<LandingPageAdm/>} />
         <Route path="galeria" element={<GaleriaAdm/>} />
      </Route>
    </Routes>
  );
}
