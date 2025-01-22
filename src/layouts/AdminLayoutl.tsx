import { Outlet } from "react-router-dom";
import { Header } from "../components/Administracao/Header";

export default function AdminLayout(){
  return (
    <div>
      <Header />
      <Outlet/>
    </div>
  );
}