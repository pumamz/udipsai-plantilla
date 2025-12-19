import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

export default function ListaEspecialistas() {
  return (
    <>
      <PageMeta
        title="Lista de Especialistas | Udipsai"
        description="Formulario para la gestión de asignaciones de especialistas en Udipsai"
      />
      <PageBreadcrumb pageTitle="Lista de Especialistas" />
      <ComponentCard title="Lista de Especialistas">
        <div></div>
      </ComponentCard>
    </>
  );
}
