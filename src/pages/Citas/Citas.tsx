import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";

const Citas = () => {
  return (
    <>
      <PageMeta
        title="Citas | Udipsai"
        description="Formulario para la gestión de citas en Udipsai"
      />
      <PageBreadcrumb pageTitle="Citas" />
      <ComponentCard title="Citas">
        <div></div>
      </ComponentCard>
    </>
  );
};

export default Citas;
