import { Routes, Route } from "react-router-dom";

import { Galeria } from "./Pages/Galeria";
import AdminLayout from "./layouts/AdminLayoutl";
import { AdmGaleria } from "./components/Administracao/galeria/AdmGaleria";
import { Inicial } from "./Pages/Inicial";
import { Home } from "./Pages/Home";
import { LandingPage } from "./Pages/LandingPage";

export function Router() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/galeria" element={<Galeria />} />

      <Route path="/adm" element={<AdminLayout/>} >
         <Route index element={<Inicial />} />
         <Route path="inicial" element={<Inicial/>} />
         <Route path="landingPage" element={<LandingPage/>} />
         <Route path="galeria" element={<AdmGaleria/>} />
      </Route>
    </Routes>
  );
}
