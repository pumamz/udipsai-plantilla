import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import Input from "../../components/form/input/InputField";
import Label from "../../components/form/Label";
import Select from "../../components/form/Select";
import DropZone from "../../components/form/form-elements/DropZone";
import Switch from "../../components/form/switch/Switch";
import { useState } from "react";
export default function FormularioEspecialistas() {

    const optionsSede = [
    { value: "cuenca", label: "Cuenca" },
    { value: "quito", label: "Quito" },
    { value: "azogues", label: "Azogues" },
];
const optionsEspecialidad = [
    { value: "cardiologia", label: "Cardiología" },
    { value: "dermatologia", label: "Dermatología" },
    { value: "neurologia", label: "Neurología" },
];
const handleSelectChange = (value: string) => {
    console.log("Selected value:", value);
  };

const handleSwitchChange = (checked: boolean) => {
    console.log("Switch is now:", checked ? "ON" : "OFF");
  };
    return (
        <div>
            <PageMeta
                title="Formulario de Especialistas | Udipsai"
                description="Formulario para la gestión de Especialistas en Udipsai"
            />
            <PageBreadcrumb
                pageTitle="Formulario de Especialistas" />
            <div className="grid grid-cols-1 gap-6 x1:grid-cols-2">
                <ComponentCard title="Formulario de Especialistas">
                    {/* Imagen */}
                    <div className="space-y-6">
                        <Label htmlFor="imagen">Foto de Perfil</Label>
                        <DropZone />
                    </div>
                    {/* Sede */}
                    <div className="space-y-6">
                        <Label htmlFor="sede">Sede</Label>
                        <Select
                            options={optionsSede}
                            placeholder="Seleccione una sede"
                            onChange={handleSelectChange}
                            className="dark:bg-dark-900" />
                    </div>
                    {/* Cédula/RUC */}
                    <div className="space-y-6">
                        <div>
                            <Label htmlFor="cedula-ruc">Cédula/RUC</Label>
                            <Input id="cedula-ruc" type="text" placeholder="Ingrese el número de cédula/ruc" />
                        </div>
                    </div>
                    {/* Nombre Completo */}
                    <div className="space-y-6">
                        <div>
                            <Label htmlFor="nombre">Nombre Completo</Label>
                            <Input id="nombre" type="text" placeholder="Ingrese el nombre completo" />
                        </div>
                    </div>
                    {/* Especialidad */}
                    <div className="space-y-6">
                        <Label htmlFor="especialidad">Especialidad</Label>
                        <Select
                            options={optionsEspecialidad}
                            placeholder="Seleccione una especialidad"
                            onChange={handleSelectChange}
                            className="dark:bg-dark-900" />
                    </div>
                    {/* Pasante */}
                     <div className="flex items-center gap-3">
           <Switch
          label="Pasante"
          defaultChecked={true}
          onChange={handleSwitchChange}
          color="blue"
        />
        </div>
                </ComponentCard>
            </div>
        </div>
    );
}



