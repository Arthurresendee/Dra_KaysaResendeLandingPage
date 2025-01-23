import { Routes, Route } from "react-router-dom";

import { Galeria } from "./pages/Galeria";
import AdminLayout from "./layouts/AdminLayoutl";
import { GaleriaAdm } from "./pages/GaleriaAdm";
import { InicialAdm } from "./pages/InicialAdm";
import { Home } from "./pages/Home";
import { LandingPageAdm } from "./pages/LandingPageAdm";

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
