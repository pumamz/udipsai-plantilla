import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import FormularioEspecialistas from "../../components/form/especialista-form/FormularioEspecialistas";

export default function NuevosEspecialistas() {
  return (
    <>
      <PageMeta
        title="Nuevo Especialista | Udipsai"
        description="Formulario para la gestión de especialistas en Udipsai"
      />
      <PageBreadcrumb pageTitle="Nuevo Especialista" />
      <ComponentCard title="Datos personales del especialista">
        <FormularioEspecialistas />
      </ComponentCard>
    </>
  );
}
