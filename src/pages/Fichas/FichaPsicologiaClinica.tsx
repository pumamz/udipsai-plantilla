import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
export default function FichaPsicologiaClinica() {
  return (
    <>
      <PageMeta
        title="Fichas | Udipsai"
        description="Formulario para la gestión de fichas psicología clínica en Udipsai"
      />
      <PageBreadcrumb pageTitle="Fichas" />
      <ComponentCard title="Ficha Psicología Clínica">
        <div></div>
      </ComponentCard>
    </>
  );
}
