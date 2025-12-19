import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import InstitucionesAccionesTable from "../../components/tables/AccionTables/InsititucionesAccionesTable";

export default function ListaInstituciones() {
  return (
    <>
      <PageMeta
        title="Lista de Instituciones | Udipsai"
        description="Formulario para la gestión de instituciones en Udipsai"
      />
      <PageBreadcrumb pageTitle="Lista de instituciones" />
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <InstitucionesAccionesTable />
      </div>
    </>
  );
}
