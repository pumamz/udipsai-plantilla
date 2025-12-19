import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
export default function HistoriaClinica() {
  return (
    <>
      <PageMeta
        title="Fichas | Udipsai"
        description="Formulario para la gestión de fichas médicas en Udipsai"
      />
      <PageBreadcrumb pageTitle="Fichas" />
      <ComponentCard title="Historia Clínica">
        <div></div>
      </ComponentCard>
    </>
  );
}
