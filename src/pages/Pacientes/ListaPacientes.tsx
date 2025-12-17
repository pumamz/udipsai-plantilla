import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import PacientesTable from "../../components/tables/BasicTables/PacientesTable";

export default function ListaPacientes() {
  return (
    <div>
      <PageMeta
        title="Lista de Pacientes | Udipsai"
        description="Formulario para la gestión de pacientes en Udipsai"
      />
      <PageBreadcrumb pageTitle="Lista de pacientes" />
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <PacientesTable />
      
    </div>
    </div>
  );
}
