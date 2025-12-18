import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import SedesTable from "../../components/tables/BasicTables/SedesTable";

export default function ListaSedes() {
  return (
    <div>
      <PageMeta
        title="Lista de Sedes | Udipsai"
        description="Formulario para la gestión de sedes en Udipsai"
      />
      <PageBreadcrumb pageTitle="Lista de sedes" />
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <SedesTable />
      </div>
    </div>
  );
}
