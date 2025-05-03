import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Galeria } from "./Pages/Galeria";
import Login from "./Pages/Login";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/galeria" element={<Galeria />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
