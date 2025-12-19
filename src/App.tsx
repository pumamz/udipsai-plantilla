import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NuevosPacientes from "./pages/Pacientes/NuevosPacientes";
import EditarPacientes from "./pages/Pacientes/EditarPacientes";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import FormularioEspecialistas from "./components/form/especialista-form/FormularioEspecialistas";
import ListaPacientes from "./pages/Pacientes/ListaPacientes";
import ListaInstituciones from "./pages/Instituciones/Instituciones";
import ListaSedes from "./pages/Sedes/Sedes";
import Citas from "./pages/Citas/Citas";
import FichaFonoaudiologia from "./pages/Fichas/FichaFonoaudiologia";
import FichaPsicologiaClinica from "./pages/Fichas/FichaPsicologiaClinica";
import FichaPsicologiaEducativa from "./pages/Fichas/FichaPsicologiaEducativa";
import HistoriaClinica from "./pages/Fichas/HistoriaClinica";
import NotFound from "./pages/OtherPages/NotFound";
import EditarEspecialistas from "./pages/Especialistas/EditarEspecialitas";
import ListaEspecialistas from "./pages/Especialistas/ListaEspecialistas";
import AsignacionesEspecialistas from "./pages/Especialistas/AsignacionesEspecialistas";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />

            {/* Pacientes */}
            <Route path="pacientes" element={<ListaPacientes />} />
            <Route path="pacientes/nuevo" element={<NuevosPacientes />} />
            <Route path="pacientes/editar/:id" element={<EditarPacientes />} />
            <Route path="citas" element={<Citas />} />
            {/* Especialistas */}
            <Route path="especialistas" element={<ListaEspecialistas />} />
            <Route path="especialistas/nuevo" element={<FormularioEspecialistas />} />
            <Route path="especialistas/editar/:id" element={<EditarEspecialistas />} />
            <Route path="asignaciones" element={<AsignacionesEspecialistas />} />
            {/* Instituciones */}
            <Route path="instituciones" element={<ListaInstituciones />} />
            {/* Sedes */}
            <Route path="sedes" element={<ListaSedes />} />
            {/* Fichas */}
            <Route path="fonoaudiologia" element={<FichaFonoaudiologia />} />
            <Route path="psicologia-clinica" element={<FichaPsicologiaClinica />} />
            <Route path="psicologia-educativa" element={<FichaPsicologiaEducativa />} />
            <Route path="historia-clinica" element={<HistoriaClinica />} />
          </Route>

          {/* Auth Layout */}
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
