import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import FormularioPacientes from "./pages/Pacientes/FormularioPacientes";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import FormularioEspecialistas from "./pages/Especialistas/FormularioEspecialistas";
import ListaPacientes from "./pages/Pacientes/ListaPacientes";
import ListaInstituciones from "./pages/Instituciones/Instituciones";
import ListaSedes from "./pages/Sedes/Sedes";
export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />

            {/* Others Page */}
            {/* <Route path="/profile" element={<UserProfiles />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/blank" element={<Blank />} /> */}

            {/* Forms */}
            {/* <Route path="/form-elements" element={<FormElements />} /> */}

            {/* Pacientes */}
            <Route path="/pacientes" element={<ListaPacientes />} />
            <Route path="/pacientes/nuevo" element={<FormularioPacientes />} />
            {/* Especialistas */}
            <Route path="/especialistas/nuevo" element={<FormularioEspecialistas />} />
            {/* Tables */}
            {/* <Route path="/basic-tables" element={<BasicTables />} /> */}
            <Route path="/instituciones" element={<ListaInstituciones />} />
            <Route path="/sedes" element={<ListaSedes />} />
            {/* Ui Elements */}
            {/* <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} /> */}

            {/* Charts */}
            {/* <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} /> */}
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </>
  );
}
