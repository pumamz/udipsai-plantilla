import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import DatePicker from "../../components/form/date-picker";
import PhoneInput from "../../components/form/group-input/PhoneInput";
import Input from "../../components/form/input/InputField";
import TextArea from "../../components/form/input/TextArea";
import Label from "../../components/form/Label";
import Select from "../../components/form/Select";
import Switch from "../../components/form/switch/Switch";
import { useState } from "react";

export default function FormularioPacientes() {
  const countries = [
    { code: "US", label: "+1" },
    { code: "GB", label: "+44" },
    { code: "CA", label: "+1" },
    { code: "AU", label: "+61" },
  ];
  const handlePhoneNumberChange = (phoneNumber: string) => {
    console.log("Updated phone number:", phoneNumber);
  };
  const handleSwitchChange = (checked: boolean) => {
    console.log("Switch is now:", checked ? "ON" : "OFF");
  };
  const optionsDiscapacidad = [
    { value: "intelectual", label: "Intelectual" },
    { value: "fisica", label: "Física" },
    { value: "auditiva", label: "Auditiva" },
    { value: "visual", label: "Visual" },
    { value: "psicosocial", label: "Psicosocial" },
    { value: "lenguaje", label: "Lenguaje" },
    { value: "multiple", label: "Múltiple" },
    { value: "otros", label: "Otros" },
  ];

    

  const optionsInstituciones = [
    { value: "institucion1", label: "Institución Educativa 1" },
  ];
  const optionsJornada = [
    { value: "matutina", label: "Matutina" },
    { value: "vespertina", label: "Vespertina" },
    { value: "nocturna", label: "Nocturna" },
    { value: "completa", label: "Completa" },
  ];
  const optionsNivelEducativo = [
    { value: "inicial", label: "Inicial" },
    { value: "preparatoria", label: "Preparatoria" },
    { value: "basica-elemental", label: "Básica Elemental" },
    { value: "basica-media", label: "Básica Media" },
    { value: "basica-superior", label: "Básica Superior" },
    { value: "bachillerato", label: "Bachillerato" },
    { value: "no-escolarizado", label: "No Escolarizado" },
  ];
  const optionsAñoEducativo = [{ value: "select", label: "Seleccione" }];
  const handleSelectChange = (value: string) => {
    console.log("Selected value:", value);
  };
  const [motivoConsulta, setMotivoConsulta] = useState("");
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
              <Input id="cedula" type="text" placeholder="Ingrese la cédula" />
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
              <Input id="edad" type="number" placeholder="Ingrese la edad" />
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
              <Input id="ciudad" type="text" placeholder="Ingrese la ciudad" />
            </div>
            <div>
              <Label htmlFor="telefono-convencional">
                Teléfono Convencional
              </Label>
              <Input
                id="telefono-convencional"
                type="text"
                placeholder="Ingrese el teléfono convencional"
              />
            </div>
            <div>
              <Label htmlFor="telefono-celular">Teléfono Celular</Label>
              <PhoneInput
                selectPosition="start"
                countries={countries}
                placeholder="+593 09 0000-0000"
                onChange={handlePhoneNumberChange}
              />
            </div>
          </div>
        </div>
      </ComponentCard>
      <br />
      <ComponentCard title="Datos de discapacidad">
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <div>
              <Switch
                label="¿Presenta discapacidad?"
                defaultChecked={true}
                onChange={handleSwitchChange}
              />
            </div>
            <div>
              <Switch
                label="¿Porta carnet de discapacidad?"
                defaultChecked={false}
                onChange={handleSwitchChange}
              />
            </div>
            <div>
              <Label htmlFor="tipo-discapacidad">Tipo de Discapacidad</Label>
              <Select
                options={optionsDiscapacidad}
                placeholder="Selecciona el tipo de discapacidad"
                onChange={handleSelectChange}
                className="dark:bg-dark-900"
              />
            </div>
            <div>
              <Label htmlFor="detalles-discapacidad">
                Detalles de la Discapacidad
              </Label>
              <Input
                id="detalles-discapacidad"
                type="text"
                placeholder="Ingrese detalles adicionales"
              />
            </div>
            <div>
              <Label htmlFor="porcentaje-discapacidad">
                Porcentaje de Discapacidad
              </Label>
              <Input
                id="porcentaje-discapacidad"
                type="number"
                placeholder="Ingrese el porcentaje de discapacidad"
              />
            </div>
          </div>
        </div>
      </ComponentCard>
      <br />
      <ComponentCard title="Información educativa">
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <div>
              <Label htmlFor="institucion-educativa">
                Institución Educativa
              </Label>
              <Select
                options={optionsInstituciones}
                placeholder="Seleccione la institución educativa"
                onChange={handleSelectChange}
                className="dark:bg-dark-900"
              />
            </div>
            <div>
              <Label htmlFor="jornada">Jornada</Label>
              <Select
                options={optionsJornada}
                placeholder="Seleccione la jornada"
                onChange={handleSelectChange}
                className="dark:bg-dark-900"
              />
            </div>
            <div>
              <Label htmlFor="nivel-educativo">Nivel Educativo</Label>
              <Select
                options={optionsNivelEducativo}
                placeholder="Seleccione el nivel educativo"
                onChange={handleSelectChange}
                className="dark:bg-dark-900"
              />
            </div>
            <div>
              <Label htmlFor="año-educativo">Año Educativo</Label>
              <Select
                options={optionsAñoEducativo}
                placeholder="Seleccione el año educativo"
                onChange={handleSelectChange}
                className="dark:bg-dark-900"
              />
            </div>
            <div>
              <Switch
                label="Pertenencia a programa de inclusión"
                defaultChecked={false}
                onChange={handleSwitchChange}
              />
            </div>
          </div>
        </div>
      </ComponentCard>
      <br />
      <ComponentCard title="Información educativa">
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <div>
              <Label htmlFor="motivo-consulta">Motivo de consulta</Label>
              <TextArea
                value={motivoConsulta}
                onChange={(value) => setMotivoConsulta(value)}
                rows={2}
              />
            </div>
            <div>
              <Label htmlFor="observaciones">Observaciones</Label>
              <TextArea
                value={motivoConsulta}
                onChange={(value) => setMotivoConsulta(value)}
                rows={2}
              />
            </div>
          </div>
        </div>
      </ComponentCard>
    </div>
  );
}
