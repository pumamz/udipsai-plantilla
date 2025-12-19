import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import FormularioPacientes from "../../components/form/paciente-form/FormularioPacientes";

export default function EditarPacientes() {
  return (
    <>
      <PageMeta
        title="Editar Paciente | Udipsai"
        description="Formulario para la gestión de pacientes en Udipsai"
      />
      <PageBreadcrumb pageTitle="Editar Paciente" />
      <ComponentCard title="Datos personales del paciente">
        <FormularioPacientes />
      </ComponentCard>
    </>
  );
}
