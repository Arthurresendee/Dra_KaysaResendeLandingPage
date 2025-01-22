import { Routes, Route } from "react-router-dom";

import { Home } from "./Pages/Home";
import { Galeria } from "./Pages/Galeria";
import AdminLayout from "./layouts/AdminLayoutl";
import { AdmHome } from "./components/Administracao/AdmHome";
import { AdmGaleria } from "./components/Administracao/AdmGaleria";
import { Admin } from "./Pages/Admin";

export function Router() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/galeria" element={<Galeria />} />

      <Route path="/adm" element={<AdminLayout/>} >
         <Route index element={<Admin />} />
         <Route path="home" element={<AdmHome/>} />
         <Route path="galeria" element={<AdmGaleria/>} />
      </Route>
    </Routes>
  );
}
