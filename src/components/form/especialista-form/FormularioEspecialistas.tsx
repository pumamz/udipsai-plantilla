import ComponentCard from "../../common/ComponentCard";
import PageBreadcrumb from "../../common/PageBreadCrumb";
import PageMeta from "../../common/PageMeta";
import Input from "../input/InputField";
import Label from "../Label";
import Select from "../Select";
import DropZone from "../form-elements/DropZone";
import Switch from "../switch/Switch";
import DatePicker from "../date-picker";
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
            
            <ComponentCard title="Datos personales del especialista">
                {/* Imagen */}
                <div className="space-y-6">
                    <div>
                        <Label htmlFor="imagen">Foto de Perfil</Label>
                        <DropZone />
                    </div>
                    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                        {/* Cédula/RUC */}
                        <div>
                            <Label htmlFor="cedula-ruc">Cédula/RUC</Label>
                            <Input id="cedula-ruc" type="text" placeholder="Ingrese el número de cédula/ruc" />
                        </div>
                        {/* Nombre Completo */}
                        <div>
                            <Label htmlFor="nombre">Nombre Completo</Label>
                            <Input id="nombre" type="text" placeholder="Ingrese el nombre completo" />
                        </div>
                    </div>
                </div>
            </ComponentCard>
            <br />
            <ComponentCard title="Datos de la especialidad">
                {/* Sede */}
                <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                        <div>
                            <Label htmlFor="sede">Sede</Label>
                            <Select
                                options={optionsSede}
                                placeholder="Seleccione una sede"
                                onChange={handleSelectChange}
                                className="dark:bg-dark-900" />
                        </div>
                        {/* Especialidad */}
                        <div>
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
                    </div>
                    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                        <div >
                            <Label htmlFor="inicio-pasantia">Inicio de Pasantía</Label>
                            <DatePicker
                                id="inicio-pasantia"
                                placeholder="Inicio de pasantía"
                                onChange={(dates, currentDateString) => {
                                    console.log({ dates, currentDateString });
                                }}
                            />
                        </div>
                        <div>
                            <Label htmlFor="fin-pasantia">Fin de Pasantía</Label>
                            <DatePicker
                                id="fin-pasantia"
                                placeholder="Fin de pasantía"
                                onChange={(dates, currentDateString) => {
                                    console.log({ dates, currentDateString });
                                }}
                            />
                        </div>
                        <div>
                            <Label htmlFor="especialista-asignado">Especialista Asignado</Label>
                            <Select
                                options={optionsEspecialidad}
                                placeholder="Seleccione o busque un especialista"
                                onChange={handleSelectChange}
                                className="dark:bg-dark-900" />
                        </div>
                    </div>
                </div>
            </ComponentCard>
            <br />
            <ComponentCard title="Autenticación">
                <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                        <div>
                            <Label htmlFor="contrasena">Contraseña</Label>
                            <Input
                                id="contrasena"
                                type="password"
                                placeholder="Ingrese la contraseña"
                            />
                        </div>
                        <div>
                            <Label htmlFor="confirmar-contrasena">Confirmar Contraseña</Label>
                            <Input
                                id="confirmar-contrasena"
                                type="password"
                                placeholder="Confirme la contraseña"
                            />
                        </div>
                    </div>
                </div>
            </ComponentCard>
        </div>
    );
}



