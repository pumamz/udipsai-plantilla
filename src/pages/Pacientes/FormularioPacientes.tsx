import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import DatePicker from "../../components/form/date-picker";
import Input from "../../components/form/input/InputField";
import Label from "../../components/form/Label";

export default function FormularioPacientes() {
  return (
    <div>
      <PageMeta
        title="Formulario de Pacientes | Udipsai"
        description="Formulario para la gestión de pacientes en Udipsai"
      />
      <PageBreadcrumb pageTitle="Formulario de pacientes" />
      <ComponentCard title="Datos personales del paciente">
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <div>
              <Label htmlFor="nombre">Nombre Completo</Label>
              <Input
                id="nombre"
                type="text"
                placeholder="Ingrese el nombre completo"
              />
            </div>
            <div>
              <Label htmlFor="cedula">Cédula</Label>
              <Input
                id="cedula"
                type="text"
                placeholder="Ingrese la cédula"
              />
            </div>
            <div>
              <Label htmlFor="fecha-nacimiento">Fecha de Nacimiento</Label>
              <DatePicker 
                id="fecha-nacimiento"
                placeholder="Seleccione la fecha de nacimiento"
                onChange={(dates, currentDateString) => {
                console.log({ dates, currentDateString });
            }}
              />
            </div>
            <div>
              <Label htmlFor="edad">Edad</Label>
              <Input
                id="edad"
                type="number"
                placeholder="Ingrese la edad"
              />
            </div>
            <div>
              <Label htmlFor="domicilio">Domicilio</Label>
              <Input
                id="domicilio"
                type="text"
                placeholder="Ingrese el domicilio"
              />
            </div>
            <div>
              <Label htmlFor="ciudad">Ciudad</Label>
              <Input
                id="ciudad"
                type="text"
                placeholder="Ingrese la ciudad"
              />
            </div>
            <div>
              <Label htmlFor="telefono-convencional">Teléfono Convencional</Label>
              <Input
                id="telefono-convencional"
                type="text"
                placeholder="Ingrese el teléfono convencional"
              />
            </div>
            <div>
              <Label htmlFor="telefono-celular">Teléfono Celular</Label>
              <Input
                id="telefono-celular"
                type="text"
                placeholder="Ingrese el teléfono celular"
              />
            </div>
          </div>
        </div>
      </ComponentCard>

    </div>
  );
}
